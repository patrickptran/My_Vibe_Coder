import { type TreeItem } from "@/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Convert a record of files to a tree structure suitable for a TreeView component.
 * @constructor
 * @param {string} files - A record of file paths to content
 * @returns Tree Structure for TreeView component
 *
 * @example
 * Input: {"src/index.ts": "console.log('Hello World');", "src/components/Button.tsx": "export const Button = () => <button>Click me</button>;"}
 * Output: [["src", "Button.tsx"], ["index.ts"], ["README.md"]]
 */
export function convertFilesToTreeItems(files: {
  [path: string]: string;
}): TreeItem[] {
  interface TreeNode {
    [key: string]: TreeNode | null;
  }
  // Build the tree structure
  const tree: TreeNode = {};

  // sort paths to ensure consistent order
  const sortedPaths = Object.keys(files).sort();

  for (const filePath of sortedPaths) {
    const parts = filePath.split("/");
    let currentNode = tree;

    // navigate or create nodes
    for (let i = 0; i < parts.length - 1; i++) {
      const part = parts[i];
      if (!currentNode[part]) {
        currentNode[part] = {};
      }
      currentNode = currentNode[part] as TreeNode;
    }
    // add the file as the leaf node
    const fileName = parts[parts.length - 1];
    currentNode[fileName] = null;
  }

  function convertNode(node: TreeNode, name?: string): TreeItem[] | TreeItem {
    const entries = Object.entries(node);
    if (entries.length === 0) return name || "";
    const children: TreeItem[] = [];

    for (const [key, value] of entries) {
      if (value === null) {
        // this is a file
        children.push(key);
      } else {
        //this is a folder
        const subTree = convertNode(value, key);
        if (Array.isArray(subTree)) {
          children.push([key, ...subTree]);
        } else {
          children.push([key, subTree]);
        }
      }
    }
    return children;
  }

  const res = convertNode(tree);
  return Array.isArray(res) ? res : [res];
}
