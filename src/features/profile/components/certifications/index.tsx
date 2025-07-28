// import { CollapsibleList } from "@/components/collapsible-list";

// import { CERTIFICATIONS } from "../../data/certifications";
import { Panel, PanelHeader, PanelTitle } from "../panel";
// import { CertificationItem } from "./certification-item";

export function Certifications() {
  return (
    <Panel id="certs">
      <PanelHeader>
        <PanelTitle>
          Certifications
          <sup className="ml-1 font-mono text-sm font-medium text-muted-foreground select-none">
            {/* ({CERTIFICATIONS.length}) */}
          </sup>
        </PanelTitle>
      </PanelHeader>
      <p className="ml-5 font-mono text-sm font-medium text-muted-foreground select-none">Coming Soon...</p>
      {/* <CollapsibleList
        items={CERTIFICATIONS}
        max={8}
        renderItem={(item) => <CertificationItem certification={item} />}
      /> */}
    </Panel>
  );
}
