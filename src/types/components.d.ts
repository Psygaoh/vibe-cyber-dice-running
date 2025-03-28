declare module '*.css';

declare module './components/StartModal' {
  interface StartModalProps {
    isOpen: boolean;
    onStart: () => void;
  }
  export function StartModal(props: StartModalProps): JSX.Element;
}

declare module './components/Game' {
  interface GameProps {
    currentTurn: 1 | 2;
  }
  export function Game(props: GameProps): JSX.Element;
}

declare module './components/Header' {
  export function Header(): JSX.Element;
}

declare module './components/Footer' {
  export function Footer(): JSX.Element;
} 