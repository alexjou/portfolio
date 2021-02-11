import { Grid, Icon, LinearProgress, Paper, Typography, withStyles } from "@material-ui/core"
import React from "react"
import resumeData from "../../utils/resumeData";
import CustomTimeline, { CustomTimelineSeparator } from "../../components/Timeline/Timeline";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";

import "./Resume.css";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineContent from "@material-ui/lab/TimelineContent";
import Particles from "react-particles-js";

const Resume = () => {
  const BorderLinearProgress = withStyles(() => ({
    root: {
      height: 8,
      borderRadius: 6,
    },
    colorPrimary: {
      backgroundColor: ' #c2f8ff',
    },
    bar: {
      borderRadius: 6,
      backgroundColor: '#53e2f5',
    },
  }))(LinearProgress);
  return (
    <>
      {/* About Me */}
      <Grid container className="section pb_45 pt_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text">Sobre mim</h6>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" className="aboutme_text">
            {resumeData.about}
          </Typography>
        </Grid>
      </Grid>

      {/* Education and experiences Me */}
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text">Currículo</h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container className="resume_timeline">

            {/* Education */}
            <Grid item sm={12} md={6}>
              <CustomTimeline title="Educação" icon={<SchoolIcon />}>
                {resumeData.education.map((education, index) => (
                  <TimelineItem key={index}>
                    <CustomTimelineSeparator />
                    <TimelineContent className="timeline_content">
                      <Typography className="timeline_title">{education.title}</Typography>
                      <Typography variant="caption" className="timeline_date">{education.date}</Typography>
                      <Typography variant="body2" className="timeline_description">{education.description}</Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>

            {/* Experiences */}
            <Grid item sm={12} md={6}>
              <CustomTimeline title="Trabalho e Experiências" icon={<WorkIcon />}>
                {resumeData.experiences.map((experiences, index) => (
                  <TimelineItem key={index}>
                    <CustomTimelineSeparator />
                    <TimelineContent className="timeline_content">
                      <Typography className="timeline_title">{experiences.title}</Typography>
                      <Typography variant="caption" className="timeline_date">{experiences.date}</Typography>
                      <Typography variant="body2" className="timeline_description">{experiences.description}</Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>

          </Grid>
        </Grid>
      </Grid>
      <Particles
        className="particles_canvas"
        params={{
          "particles": {
            "number": {
              "value": 50
            },
            "size": {
              "value": 3
            },
            "shape": {
              "stroke": {
                "width": "6",
                "color": "#53e2f5"
              }
            }
          },
          "interactivity": {
            "events": {
              "onhover": {
                "enable": true,
                "mode": "repulse"
              }
            }
          }
        }} />
      {/* Services */}
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text">Meus Serviços</h6>
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={3} justify='space-around'>
            {resumeData.services.map((service, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <div className="service">
                  <Icon className="service_icon">{service.icon}</Icon>
                  <Typography className="service_title">{service.title}</Typography>
                  <Typography className="service_description">{service.description}</Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      {/* Skills */}
      <Grid container className="section graybg pb_45 p_50">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text">Habilidades</h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="space-between" spacing={3}>
            {resumeData.skills.map((skill, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Paper elevation={0} className="skill">
                  <Typography variant="h6" className="skill_title">{skill.title}</Typography>

                  {skill.description.map((element, index) =>
                  (
                    <div key={index}>
                      <Typography variant="body2" className="skill_description" >
                        <TimelineDot variant={"outlined"} className="timeline_dot" />
                        {element.name}
                      </Typography>
                      <BorderLinearProgress variant="determinate" value={element.porcentage} />
                    </div>
                  )
                  )}

                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>

      </Grid>
    </>
  )
}

export default Resume
