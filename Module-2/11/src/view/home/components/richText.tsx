import {
  BLOCKS,
  MARKS,
  Document as RichTextDocument,
} from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

type RichTextType = {
  document: RichTextDocument | undefined;
};

export default function RichText({ document }: RichTextType) {
  if (!document) {
    return null;
  }

  const Ul = ({ children }: { children: React.ReactNode }) => (
    <ul className="list-decimal">{children}</ul>
  );

  const Ol = ({ children }: { children: React.ReactNode }) => (
    <ol className="list-disc">{children}</ol>
  );

  const P = ({ children }: { children: React.ReactNode }) => (
    <p className="text-3xl">{children}</p>
  );

  // console.log(document.content[0]);
  const options = {
    renderNode: {
      [BLOCKS.UL_LIST]: (node: any, children: React.ReactNode) => (
        <Ul>{children}</Ul>
      ),
      [BLOCKS.OL_LIST]: (node: any, children: React.ReactNode) => (
        <Ol>{children}</Ol>
      ),
      [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => (
        <P>{children}</P>
      ),
    },
    // renderMark: {
    //   [MARKS.]
    // }
  };
  return <>{documentToReactComponents(document, options)}</>;
}
