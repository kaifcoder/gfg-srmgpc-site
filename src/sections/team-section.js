/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import TeamCard from 'components/team-card';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

import Member1 from 'assets/team/member-1.png';
import Member2 from 'assets/team/member-2.png';
import Member3 from 'assets/team/member-3.png';
import Member4 from 'assets/team/member-4.png';
import Member5 from 'assets/team/member-5.png';
import Member6 from 'assets/team/member-6.png';
import Carousel from 'react-multi-carousel';
import ButtonGroup from 'components/button-group';

const data = [
  {
    id: 1,
    imgSrc: Member1,
    altText: 'Vaishnavi Pandey',
    title: 'Vaishnavi Pandey',
    designation: 'Chairperson',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 2,
    imgSrc: Member2,
    altText: 'Aman verma',
    title: 'Aman verma',
    designation: 'Vice chairperson',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 3,
    imgSrc: Member4,
    altText: 'Jatin Yadav',
    title: 'Jatin Yadav',
    designation: 'Graphics head',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 4,
    imgSrc: Member3,
    altText: 'Astitva Singh',
    title: 'Astitva Singh',
    designation: 'Team Lead',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 5,
    imgSrc: Member5,
    altText: 'Raj Rathaur',
    title: 'Raj Rathaur',
    designation: 'Social Media Head',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 6,
    imgSrc: Member6,
    altText: 'Gaurav Kumar',
    title: 'Gaurav Kumar',
    designation: 'PR head',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1619 },
    items: 6,
    slidesToSlide: 6, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1619, min: 1024 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
};

const carouselParams = {
  additionalTransfrom:0,
  arrows:false,
  autoPlaySpeed:3000,
  centerMode:false,
  className:"",
  containerClass:"carousel-container",
  customButtonGroup:<ButtonGroup />,
  dotListClass:"",
  draggable: true,
  focusOnSelect:false,
  infinite:true,
  itemClass:"",
  keyBoardControl: true,
  minimumTouchDrag:80,
  renderButtonGroupOutside: true,
  renderDotsOutside:false,
  responsive:responsive,
  showDots:false,
  sliderClass:"",
  slidesToSlide:1,
}

export default function TeamSection() {
  return (
    <section sx={styles.customspc} id="Team">
      <Container>
        <SectionHeader
        slogan="Our Team"
        title="The most talented people driving this club"
        />

        <Grid sx={styles.carouselWrapper}>
          <Carousel {...carouselParams}>

          {data.map((item)=>((
            <TeamCard
             key={item.id}
             src={item.imgSrc}
             title={item.title}
             designation={item.designation}
             altText={item.altText}
             social={item.socialProfile}
            />
          )))}
          </Carousel>
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  customspc : {
    mt: [9]
  },
  carouselWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    alignItems: 'flex-end',
    mt: '-30px',
    px: '15px',
    '.carousel-container': {
      width: '100%',
      maxWidth: [
        '100%',
        null,
        null,
        '750px',
        '1000px',
        '1180px',
        null,
        'calc(50% + 865px)',
      ],
      mr: ['auto', null, null, null, null, null, null, '-220px'],
      ml: 'auto',
      '.react-multi-carousel-item': {
        transition: 'all 0.25s',
      },
      '.react-multi-carousel-item--active:nth-of-type(4n)': {
        opacity: '0.5',
        '@media screen and (max-width: 1620px)': {
          opacity: 1,
        },
      },
    },
  },
};
