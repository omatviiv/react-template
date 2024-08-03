declare module '*.svg' {
  const ReactComponent: React.FC<React.SVGProps<SVGElement>>;

  export default ReactComponent;
}

declare module '*.svg?url' {
  const content: string;

  export default content;
}
