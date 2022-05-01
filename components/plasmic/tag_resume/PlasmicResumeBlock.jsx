// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: nq12TutH13we1UigJmjqSV
// Component: Bnf8zBpPgU
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import TagStack from "../../TagStack"; // plasmic-import: ftq3RaS44j/component
import ResumeTag from "../../ResumeTag"; // plasmic-import: zTvZ3EPO88/component
import ResumeSection from "../../ResumeSection"; // plasmic-import: DiI__yiN1D/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_tag_resume.module.css"; // plasmic-import: nq12TutH13we1UigJmjqSV/projectcss
import sty from "./PlasmicResumeBlock.module.css"; // plasmic-import: Bnf8zBpPgU/css

export const PlasmicResumeBlock__VariantProps = new Array();

export const PlasmicResumeBlock__ArgProps = new Array(
  "blockNumber",
  "tagStackTarget"
);

function PlasmicResumeBlock__RenderFunc(props) {
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
      <div
        data-plasmic-name={"tagContainer"}
        data-plasmic-override={overrides.tagContainer}
        className={classNames(projectcss.all, sty.tagContainer)}
      >
        {p.renderPlasmicSlot({
          defaultContents: "1",
          value: args.blockNumber,
          className: classNames(sty.slotTargetBlockNumber)
        })}

        {p.renderPlasmicSlot({
          defaultContents: (
            <TagStack
              className={classNames("__wab_instance", sty.tagStack__bplM7)}
            >
              <ResumeTag
                className={classNames("__wab_instance", sty.resumeTag__dvkDr)}
              />

              <ResumeTag
                className={classNames("__wab_instance", sty.resumeTag__s0BU)}
              />

              <ResumeTag
                className={classNames("__wab_instance", sty.resumeTag__beo14)}
              />

              <ResumeTag
                className={classNames("__wab_instance", sty.resumeTag__h9FzX)}
              />

              <ResumeTag
                className={classNames("__wab_instance", sty.resumeTag__y4Qcj)}
              />

              <ResumeTag
                className={classNames("__wab_instance", sty.resumeTag__qoX26)}
              />

              <ResumeTag
                className={classNames("__wab_instance", sty.resumeTag__eMeDl)}
              />
            </TagStack>
          ),

          value: args.tagStackTarget
        })}
      </div>

      <div
        data-plasmic-name={"column"}
        data-plasmic-override={overrides.column}
        className={classNames(projectcss.all, sty.column)}
      >
        <div
          data-plasmic-name={"sectionsStack"}
          data-plasmic-override={overrides.sectionsStack}
          className={classNames(projectcss.all, sty.sectionsStack)}
        >
          <ResumeSection
            className={classNames("__wab_instance", sty.resumeSection___8Uc42)}
          />

          <ResumeSection
            className={classNames("__wab_instance", sty.resumeSection__wunwr)}
          />

          <ResumeSection
            addNew={true}
            className={classNames("__wab_instance", sty.resumeSection__zhr5)}
          />
        </div>
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "tagContainer", "column", "sectionsStack"],
  tagContainer: ["tagContainer"],
  column: ["column", "sectionsStack"],
  sectionsStack: ["sectionsStack"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicResumeBlock__ArgProps,
      internalVariantPropNames: PlasmicResumeBlock__VariantProps
    });

    return PlasmicResumeBlock__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicResumeBlock";
  } else {
    func.displayName = `PlasmicResumeBlock.${nodeName}`;
  }
  return func;
}

export const PlasmicResumeBlock = Object.assign(
  // Top-level PlasmicResumeBlock renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    tagContainer: makeNodeComponent("tagContainer"),
    column: makeNodeComponent("column"),
    sectionsStack: makeNodeComponent("sectionsStack"),
    // Metadata about props expected for PlasmicResumeBlock
    internalVariantProps: PlasmicResumeBlock__VariantProps,
    internalArgProps: PlasmicResumeBlock__ArgProps
  }
);

export default PlasmicResumeBlock;
/* prettier-ignore-end */
