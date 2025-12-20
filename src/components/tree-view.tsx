import { TreeItem } from "@/types";

interface TreeViewProps {
  data: TreeItem[];
  value?: string | null;
  onSelect: (item: string) => void;
}

export const TreeView = ({ data, value, onSelect }: TreeViewProps) => {
  return (
    <div>
      <span>{JSON.stringify(data)}</span>
    </div>
  );
};
