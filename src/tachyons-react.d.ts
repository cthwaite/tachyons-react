type AnyNode = React.ReactElement<any> | React.ReactNodeArray | React.ReactPortal;
type NodeProducer = (data?: any) => React.ReactNode;
type NodeOrNodeProducer = AnyNode | NodeProducer;

interface ImageMeta {
    src: string;
    alt?: string;
    title?: string;
}