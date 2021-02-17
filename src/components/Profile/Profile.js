import { Typography } from '@material-ui/core'
import React from 'react'
import CustomTimeline, { CustomTimelineSeparator } from '../Timeline/Timeline';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import me from '../../assets/images/me.jpeg';
import resumeData from '../../utils/resumeData';
import './Profile.css';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';
import CustomButton from '../Button/Button';
import GetAppIcon from '@material-ui/icons/GetApp';

const CustomTimelineItem = ({ title, text, link }) => (
  <TimelineItem>
    <CustomTimelineSeparator />
    <TimelineContent className="timeline_content">
      {link ? (<Typography className="timelineItem_text">
        <span>{title}:</span>{" "}
        <a href={link} target="_blank" rel="noreferrer">
          {text}
        </a>
      </Typography>
      ) : (
          <Typography className="timelineItem_text">
            <span>{title}:</span> {text}
          </Typography>
        )}
    </TimelineContent>
  </TimelineItem>
)

const Profile = () => {
  return (
    <div className='profile container_shadow'>
      <div className='profile_name'>
        <Typography className='name'>{resumeData.name}</Typography>
        <Typography className='title'>{resumeData.title}</Typography>
      </div>

      <figure className='profile_image'>
        <img src={me} alt="" />
      </figure>

      <div className='profile_information'>
        <CustomTimeline icon={<PersonOutlineOutlinedIcon />} >
          <CustomTimelineItem title='Aniversário' text={resumeData.birtday} />
          <CustomTimelineItem title='Endereço' text={resumeData.address} />
        </CustomTimeline>
        <div className="button_container">
          <CustomButton href="https://firebasestorage.googleapis.com/v0/b/turismo-648f9.appspot.com/o/Profile.pdf?alt=media&token=560fc115-f7c2-4443-9dc0-93d6942856d3" text={'Download CV'} icon={<GetAppIcon />} />
        </div>
      </div>
    </div>
  )
}

export default Profile
