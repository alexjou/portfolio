import { Card, CardActionArea, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Grow, Tab, Tabs, Typography } from "@material-ui/core"
import React, { useState } from "react"
import "./Portfolio.css";
import resumeData from "../../utils/resumeData";
import Carousel from 'react-bootstrap/Carousel';

const Portfolio = () => {
  const [tabValue, setTabValue] = useState("Todas");
  const [projectDialog, setProjectDialog] = useState(false);

  return (
    <Grid container spacing={1} className="section pb_45 pt_45">

      {/* Title */}
      <Grid item className="section_title mb_20">
        <span></span>
        <h6 className="section_title_text">Portfolio</h6>
      </Grid>

      {/* Tabs */}
      <Grid item xs={12}>
        <Tabs
          value={tabValue}
          indicatorColor="primary"
          className="customTabs"
          onChange={(event, newValue) => setTabValue(newValue)}>
          <Tab
            label="Todas"
            value="Todas"
            className={tabValue === "Todas" ? "customTabs_item active" : "customTabs_item"} />

          {[...new Set(resumeData.projects.map((item) => item.tag))].map(
            (tag, index) => (
              <Tab
                key={index}
                label={tag}
                value={tag}
                className={tabValue === tag ? "customTabs_item active" : "customTabs_item"} />
            )
          )}
        </Tabs>
      </Grid>
      {/* Projects */}
      <Grid item xs={12}>
        <Grid container spacing={3}>
          {resumeData.projects.map((project, index) => (
            <>
              {tabValue === project.tag || tabValue === "Todas" ? (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Grow in timeout={1000}>
                    <Card className="customCard" onClick={() => setProjectDialog(project)}>
                      <CardActionArea>
                        <CardMedia
                          className="customCard_image"
                          image={project.image[0].link}
                          title={project.title} />
                        <CardContent>
                          <Typography variant={"body2"} className="customCard_title">{project.title}</Typography>
                          <Typography variant={"body2"} className="customCard_description">{project.caption}</Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grow>
                </Grid>
              ) : null}
            </>
          ))}
        </Grid>
      </Grid>

      <Dialog
        open={projectDialog}
        onClose={() => setProjectDialog(false)}
        className="projectDialog"
        fullWidth>
        <DialogTitle
          onClose={() =>
            setProjectDialog(false)}>
          {projectDialog.title}
        </DialogTitle>
        <Carousel slide={false} className="projectDialog_carousel">
          {projectDialog?.image?.map((link, index) => (
            <Carousel.Item>
              <img src={link.link} alt="" className="projectDialog_image" />
            </Carousel.Item>
          ))}
        </Carousel>
        <DialogContent>
          <Typography className="projectDialog_description">{projectDialog.description}</Typography>
        </DialogContent>
        <DialogActions className="projectDialog_actions">
          {projectDialog?.links?.map((link, index) => (
            <a key={index} href={link.link} target="_blank" rel="noreferrer">{link.icon}</a>
          ))}
        </DialogActions>
      </Dialog>

    </Grid>
  )
}

export default Portfolio
