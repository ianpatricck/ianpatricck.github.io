import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

/*
 *  Tipagem do context do modal
 *
 *  Tipo que define a forma do modal, sendo composto
 *  por uma propriedade booleana e outra uma ação de estado.
 *
 */

type ModalContextType = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

/*
 *  Contexto do modal
 *
 *  Contexto do modal initialmente definido com o valor null.
 *
 */

const ModalContext = createContext<ModalContextType | null>(null);

/*
 *  Provedor do modal
 *
 *  Componente onde será encapsulado todo o conteúdo que enxerga
 *  as propriedades do modal.
 *
 */

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </ModalContext.Provider>
  );
}

/*
 *  useModal
 *
 *  Função que retorna todo o contexto com as propriedades
 *  usadas para manipular o modal.
 *
 */

export function useModal(): ModalContextType {
  const context = useContext(ModalContext) as ModalContextType;

  if (!context) {
    throw new Error("useModal must be used inside a ModalProvider.");
  }

  return context;
}
