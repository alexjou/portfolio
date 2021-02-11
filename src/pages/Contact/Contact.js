import { Grid, TextField, Typography } from "@material-ui/core"
import React from "react"
import resumeData from "../../utils/resumeData";

import "./Contact.css";
import CustomButton from "../../components/Button/Button";

const Resume = () => {
  return (
    <>
      {/* Contact */}
      <Grid container spacing={6} className="section pt_45 pb_45">
        {/* Contact Form */}
        <Grid item xs={12} lg={7}>
          <Grid container>
            <Grid item className="section_title mb_30">
              <span></span>
              <h6 className="section_title_text">Contato</h6>
            </Grid>

            <Grid item xs={12}>
              <Grid container spacing={3} >
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth name="name" label="Nome" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth name="email" label="E-mail" />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth name="message" label="Mensagem" multiline rows={4} />
                </Grid>
                <Grid item xs={12}>
                  <CustomButton text="Submit" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* Contact Information */}
        <Grid item xs={12} lg={5}>
          <Grid container>
            <Grid item className="section_title mb_30">
              <span></span>
              <h6 className="section_title_text">Informações</h6>
            </Grid>

            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography className="contactInfo_item">
                    <span>Addresss: </span> {resumeData.address}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className="contactInfo_item">
                    <span>Phone: </span> {resumeData.phone}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className="contactInfo_item">
                    <span>E-mail: </span> {resumeData.email}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Grid container className="contactInfo_socialsContainer">
                {Object.keys(resumeData.socials).map((key, index) => (
                  <Grid item className="contactInfo_social" key={index}>
                    <a href={resumeData.socials[key].link}>
                      {resumeData.socials[key].icon}
                    </a>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

    </>
  )
}

export default Resume
