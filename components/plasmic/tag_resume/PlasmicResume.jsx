// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: nq12TutH13we1UigJmjqSV
// Component: tJhCcLyhgP
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import ResumeHeading from "../../ResumeHeading"; // plasmic-import: sScL-67mZ4/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_tag_resume.module.css"; // plasmic-import: nq12TutH13we1UigJmjqSV/projectcss
import sty from "./PlasmicResume.module.css"; // plasmic-import: tJhCcLyhgP/css

export const PlasmicResume__VariantProps = new Array();

export const PlasmicResume__ArgProps = new Array();

function PlasmicResume__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"headings"}
        data-plasmic-override={overrides.headings}
        hasGap={true}
        className={classNames(projectcss.all, sty.headings)}
      >
        <ResumeHeading
          className={classNames("__wab_instance", sty.resumeHeading__rBMZ)}
        />

        <ResumeHeading
          className={classNames("__wab_instance", sty.resumeHeading___97Lh0)}
        />
      </p.Stack>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "headings"],
  headings: ["headings"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicResume__ArgProps,
      internalVariantPropNames: PlasmicResume__VariantProps
    });

    return PlasmicResume__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicResume";
  } else {
    func.displayName = `PlasmicResume.${nodeName}`;
  }
  return func;
}

export const PlasmicResume = Object.assign(
  // Top-level PlasmicResume renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    headings: makeNodeComponent("headings"),
    // Metadata about props expected for PlasmicResume
    internalVariantProps: PlasmicResume__VariantProps,
    internalArgProps: PlasmicResume__ArgProps
  }
);

export default PlasmicResume;
/* prettier-ignore-end */
