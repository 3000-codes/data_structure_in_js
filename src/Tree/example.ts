import { Tree } from ".";
import FileSystem from "./FileSystem";

function fileSystem() {
  const fileSystems = new FileSystem("/");
  const documents = fileSystems.root.addChild("documents");
  const downloads = fileSystems.root.addChild("downloads");
  fileSystems.add("documents/node.md");
  fileSystems.add("music/summer.mp3");
  documents!.node.addChild("resume.doc");
  downloads!.node.addChild("node.dmg");
  fileSystems.remove("documents/resume.doc");
  fileSystems.remove("documents/resume01.doc");

  return fileSystems;
}

export { fileSystem };
