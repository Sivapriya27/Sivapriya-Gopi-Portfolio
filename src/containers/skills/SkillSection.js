import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";
import ChatWithAIImg from "../../components/ChatWithAIImg";
import MlModalImg from "../../components/MlModalImg";
import DataAnalyticsImg from "../../components/DataAnalyticsImg";
import SoftwareDevImg from "../../components/SoftwareDevImg";

function GetSkillSvg(props) {
  if (props.fileName === "ChatWithAIImg")
    return <ChatWithAIImg theme={props.theme} />;
  else if (props.fileName === "MlModalImg")
    return <MlModalImg theme={props.theme} />;
  else if (props.fileName === "DataAnalyticsImg")
    return <DataAnalyticsImg theme={props.theme} />;
  return <SoftwareDevImg theme={props.theme} />;
}

class SkillSection extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        {skills.data.map((skill, i) => {
          return (
            <div key={i} className="skills-main-div">
              <Fade left duration={2000}>
                <div className="skills-image-div">
                  {/* <img
                    alt="Sivapriya's is Analysing Data"
                    src={require(`../../assets/images/${skill.imagePath}`)}
                  ></img> */}
                  <GetSkillSvg fileName={skill.fileName} theme={theme} />
                </div>
              </Fade>

              <div className="skills-text-div">
                <Fade right duration={1000}>
                  <h1 className="skills-heading" style={{ color: theme.text }}>
                    {skill.title}
                  </h1>
                </Fade>
                <Fade right duration={1500}>
                  <SoftwareSkill logos={skill.softwareSkills} />
                </Fade>
                <Fade right duration={2000}>
                  <div>
                    {skill.skills.map((skillSentence, i) => {
                      return (
                        <p
                          key={i}
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText }}
                        >
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                </Fade>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SkillSection;
