// Node Modules
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Link from "next/link";
import { withRouter } from "next/router";
import {
  FacebookIcon,
  FacebookShareButton,
  FacebookShareCount,
  TwitterIcon,
  TwitterShareButton,
  EmailIcon,
  EmailShareButton
} from "react-share";
import NextSeo from "next-seo";

// Material UI Components
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import Divider from "@material-ui/core/Divider";

// Local Components
import Header from "../components/Header";
import Panel from "../components/Panel";
import CardCustom from "../components/CardCustom";
import Footer from "../components/Footer";
import butter from "../components/common/Butter";

// Local Assets
import blog1 from "../static/images/blog1.svg";
import SubscribeForm from "../components/forms/SubscribeForm";
import { red } from "@material-ui/core/colors";

//  Style Overrides
const styles = theme => ({
  root: {
    backgroundImage: `url(${blog1})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  },
  mainImgContainer: {
    height: "300px",
    position: "relative",
    [theme.breakpoints.up("sm")]: {
      height: "400px"
    },
    [theme.breakpoints.up("md")]: {
      height: "500px"
    }
  },
  main: {
    marginBottom: "150px"
  },
  cardFirstPost: {
    boxShadow: "0 18px 56px -18px rgba(22,45,61,0)",
    backgroundColor: "#fafafa"
  },
  titleWrapper: {
    marginTop: "-75px",
    zIndex: "2",
    marginBottom: "50px"
  },
  titleContainer: {
    marginBottom: "20px"
  },
  title: {
    fontWeight: "500",
    fontSize: "1.625rem",
    [theme.breakpoints.up("sm")]: {
      fontSize: "2.125rem"
    }
  },
  subtitle: {
    fontWeight: "300",
    fontSize: "1.2rem",
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.5rem"
    }
  },
  paragraph: {
    fontSize: "1rem",
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.1875rem"
    }
  },
  progressContainer: {
    height: "-webkit-fill-available"
  },
  progress: {
    color: "grey"
  },
  avatar: {
    borderRadius: "200px",
    width: "25px",
    height: "25px",
    marginRight: "10px"
  },
  subscribeFormWrapper: {
    marginTop: "150px"
  },
  header: {
    color: "white"
  },
  shareButton: {
    marginRight: "10px",
    cursor: "pointer",
    textAlign: "center"
  },
  shareButtonsContainer: {
    marginTop: "15px"
  },
  author: {
    fontWeight: "300"
  },
  authorContainer: {
    marginRight: "20px"
  },
  keepLearning: {
    marginTop: "50px",
    fontWeight: "500",
    fontSize: "2.625rem",
    [theme.breakpoints.up("sm")]: {
      fontSize: "3.125rem"
    }
  },
  postContainer: {
    minWidth: "0px",
    [theme.breakpoints.up("sm")]: {
      minWidth: "450px"
    }
  },
  postWrapper: {
    marginTop: "20px"
  },
  postTitleContainer: {
    padding: "20px"
  },
  fullHeight: {
    height: "100%"
  },
  mainCopy: {
    marginBottom: "150px"
  },
  mainCopyInner: {
    maxWidth: "685px"
  },
  postHTML: {
    "& p": {
      fontSize: "1.2rem",
      lineHeight: "1.9"
    },
    "& div": {
      "& p": {
        fontSize: "0.8rem",
        lineHeight: "1.4"
      }
    },
    "& h1": {
      fontSize: "3.5rem",
      marginBottom: "60px"
    },
    "& h2": {
      fontSize: "2.5rem"
    },
    "& h3": {
      fontSize: "2.0rem"
    },
    "& th, td": {
      padding: "15px",
      fontSize: "1rem"
    },
    "@media (max-width: 600px)": {
      "& div": {
        "& p": {
          fontSize: "0.5rem",
          lineHeight: "1"
        }
      },
      "& p": {
        fontSize: "1rem",
        lineHeight: "1.6"
      },
      "& h1": {
        fontSize: "2.5rem",
        marginBottom: "40px"
      },
      "& h2": {
        fontSize: "2.0rem"
      },
      "& h3": {
        fontSize: "1.5rem"
      },
      "& th, td": {
        padding: "8px",
        fontSize: "0.8rem"
      }
    }
  }
});

class Post extends React.Component {
  state = {
    data: {},
    recentPosts: []
  };

  componentDidMount() {
    butter.post
      .retrieve(this.props.slug)
      .then(post => {
        this.setState(post.data);
        butter.category
          .retrieve(post.data.data.categories[0].slug, {
            include: "recent_posts"
          })
          .then(res => {
            this.setState({ recentPosts: res.data.data.recent_posts });
          })
          .catch(res => {
            console.log(res);
          });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    let postContent;
    const { classes, thisPost } = this.props;
    let currentPost;
    currentPost = this.state.data;

    const recentPostsFiltered = this.state.recentPosts.filter(post => {
      return currentPost.title !== post.title;
    });

    if (currentPost.title == null) {
      postContent = (
        <Grid
          container
          justify="center"
          alignItems="center"
          className={classes.progressContainer}
        >
          <CircularProgress className={classes.progress} />
        </Grid>
      );
    } else {
      postContent = (
        <React.Fragment>
          <Grid
            item
            style={{
              backgroundImage: `url(${currentPost.featured_image})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center"
            }}
          >
            <Header className={classes.header} />

            <Panel>
              <Grid item className={classes.mainImgContainer} />
            </Panel>
          </Grid>

          <Panel className={classes.main}>
            <Grid item xs={12} sm={9} md={7} className={classes.titleWrapper}>
              <CardCustom padding visible className={classes.cardFirstPost}>
                <Grid item className={classes.titleContainer}>
                  <Typography
                    variant="h4"
                    className={classes.title}
                    gutterBottom
                  >
                    {currentPost.title}
                  </Typography>
                  <Typography variant="h5" className={classes.subtitle}>
                    {currentPost.summary}
                  </Typography>
                </Grid>
                <Grid container alignItems="center" justify="space-between">
                  <Grid item className={classes.authorContainer}>
                    <Grid container alignItems="center">
                      <img
                        src={currentPost.author.profile_image}
                        alt="User avatar"
                        className={classes.avatar}
                      />
                      <Typography variant="body2" className={classes.author}>
                        Written by {currentPost.author.first_name}{" "}
                        {currentPost.author.last_name}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item className={classes.shareButtonsContainer}>
                    <Grid container>
                      <FacebookShareButton
                        url={`https://synapseprep.net/blog/post/${
                          currentPost.url
                        }`}
                        quote={currentPost.title}
                        className={classes.shareButton}
                      >
                        <FacebookIcon size={30} round={true} />
                        <FacebookShareCount
                          url={`https://synapseprep.net/blog/post/${
                            currentPost.url
                          }`}
                        />
                      </FacebookShareButton>
                      <TwitterShareButton
                        url={`https://synapseprep.net/blog/post/${
                          currentPost.url
                        }`}
                        title={currentPost.title}
                        className={classes.shareButton}
                      >
                        <TwitterIcon size={30} round={true} />
                      </TwitterShareButton>
                      <EmailShareButton
                        url={`https://synapseprep.net/blog/post/${
                          currentPost.url
                        }`}
                        subject={currentPost.title}
                        body={currentPost.summary}
                        className={classes.shareButton}
                      >
                        <EmailIcon size={30} round={true} />
                      </EmailShareButton>
                    </Grid>
                  </Grid>
                </Grid>
              </CardCustom>
            </Grid>

            <Grid container justify="center" className={classes.mainCopy}>
              <Grid
                item
                xs={12}
                sm={10}
                md={8}
                className={classes.mainCopyInner}
              >
                <div
                  className={classes.postHTML}
                  dangerouslySetInnerHTML={{ __html: currentPost.body }}
                />
              </Grid>
            </Grid>
            <Divider />
            <Grid
              container
              justify="center"
              className={classes.subscribeFormWrapper}
            >
              <SubscribeForm />
            </Grid>
            <Grid container justify="center">
              <Typography variant="h6" className={classes.keepLearning}>
                Keep Learning
              </Typography>
              <Grid
                container
                spacing={24}
                justify="space-evenly"
                className={classes.postWrapper}
              >
                {}
                {recentPostsFiltered.slice(0, 2).map((post, key) => {
                  return (
                    <Link
                      key={key}
                      as={`/blog/post/${post.slug}`}
                      href={`/blog/post?slug=${post.slug}`}
                    >
                      <Grid
                        item
                        xs={12}
                        sm={8}
                        md={6}
                        className={classes.postContainer}
                      >
                        <CardCustom className={classes.fullHeight} clickable>
                          <div
                            className={classes.postImg}
                            alt="blog image"
                            style={{
                              paddingBottom: "50%",
                              height: "200px",
                              backgroundImage: `url(${post.featured_image})`,
                              backgroundSize: "cover",
                              backgroundRepeat: "no-repeat",
                              backgroundPosition: "center"
                            }}
                          />
                          <Grid item className={classes.postTitleContainer}>
                            <Typography
                              variant="h4"
                              className={classes.title}
                              gutterBottom
                            >
                              {post.title}
                            </Typography>
                            <Typography
                              variant="h5"
                              className={classes.subtitle}
                            >
                              {post.summary}
                            </Typography>
                          </Grid>
                        </CardCustom>
                      </Grid>
                    </Link>
                  );
                })}
              </Grid>
            </Grid>
          </Panel>
          <Footer />
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <NextSeo
          config={{
            title: thisPost.title,
            description: thisPost.summary,
            openGraph: {
              title: thisPost.title,
              type: "article",
              url: `https://synapseprep.net/blog/post/${thisPost.url}`,
              site_name: "https://synapseprep.net",
              description: thisPost.summary,
              images: [
                {
                  url: thisPost.featured_image,
                  width: 800,
                  height: 600
                }
              ]
            }
          }}
        />
        {postContent}
      </React.Fragment>
    );
  }
}

Post.propTypes = {
  classes: PropTypes.object.isRequired
};

Post.getInitialProps = async ({ query }) => {
  const thisPost = await butter.post.retrieve(query.slug);

  return { slug: query.slug, thisPost: thisPost.data.data };
};

export default withRouter(withStyles(styles)(Post));
