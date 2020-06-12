// Node Modules
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Link from "next/link";

// Material UI Components
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";

// Local Components
import Header from "../components/Header";
import Panel from "../components/Panel";
import CardCustom from "../components/CardCustom";
import Footer from "../components/Footer";
import butter from "../components/common/Butter";

// Local Assets
import blog1 from "../static/images/blog1.svg";

//  Style Overrides
const styles = theme => ({
  root: {
    backgroundImage: `url(${blog1})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  },
  mainImgContainer: {
    position: "relative",
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {}
  },
  main: {},
  titleWrapper: {
    marginTop: "0px",
    zIndex: "2",
    marginLeft: "0px",
    [theme.breakpoints.up("sm")]: {
      marginTop: "-75px",
      marginLeft: "5%"
    },
    [theme.breakpoints.up("md")]: {
      marginLeft: "10%"
    }
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
  firstPostContainer: {
    paddingTop: "50px",
    borderTop: "1px solid"
  },
  paragraph: {
    fontSize: "1.1875rem",
    lineHeight: "1.7"
  },
  postsImg: {
    width: "100%"
  },
  progressContainer: {
    height: "-webkit-fill-available"
  },
  progress: {
    color: "grey"
  },
  postContainer: {
    minWidth: "0px",
    [theme.breakpoints.up("sm")]: {
      minWidth: "450px"
    }
  },
  postWrapper: {
    marginTop: "20px",
    marginBottom: "150px"
  },
  postTitleContainer: {
    padding: "20px"
  },
  fullHeight: {
    height: "100%"
  },
  cardFirstPostContainer: {
    boxShadow: "0 18px 56px -18px rgba(22,45,61,0)",
    backgroundColor: "#fafafa",

    "&:hover": {
      boxShadow: "0 18px 56px -18px rgba(22,45,61,0.3)",
      [theme.breakpoints.up("sm")]: {
        boxShadow: "0 18px 56px -18px rgba(22,45,61,0)"
      },
      "& $cardFix": {
        boxShadow: "0 2px 7px 0 rgba(0, 0, 0, 0.3)"
      },
      "& $cardFirstPostImgContainer": {
        boxShadow: "0 2px 7px 0 rgba(0, 0, 0, 0.3)"
      }
    }
  },
  avatar: {
    borderRadius: "200px",
    width: "25px",
    height: "25px",
    marginRight: "10px"
  },
  author: {
    fontWeight: "300"
  },
  cardFirstPostImgContainer: {
    transition: "0.15s",
    borderBottomLeftRadius: "0px",
    borderBottomRightRadius: "0px",
    [theme.breakpoints.up("sm")]: {
      borderBottomLeftRadius: "10px",
      borderBottomRightRadius: "10px"
    }
  },
  cardtitleContainer: {
    borderTopLeftRadius: "0px",
    borderTopRightRadius: "0px",
    [theme.breakpoints.up("sm")]: {
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px"
    }
  },
  morePosts: {
    marginTop: "50px",
    fontWeight: "500",
    fontSize: "2.625rem",
    [theme.breakpoints.up("sm")]: {
      fontSize: "3.125rem"
    }
  }
});

class Blog extends React.Component {
  state = {
    meta: {},
    data: []
  };
  componentDidMount() {
    butter.post.list({ page: 1, page_size: 10 }).then(res => {
      this.setState(res.data);
    });
  }
  render() {
    let blogContent;
    const post = this.state.data;
    let firstPost = post[0];
    const { classes } = this.props;
    const { next_page, previous_page } = this.state.meta;
    const hasPosts = this.state.meta.count;

    if (hasPosts === undefined) {
      blogContent = (
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
      blogContent = (
        <React.Fragment>
          <Header logo="blue" backgroundColor="whiteSmoke" />
          <Grid item className={classes.firstPostContainer}>
            <Panel>
              <Link
                as={`/blog/post/${firstPost.slug}`}
                href={`/blog/post?slug=${firstPost.slug}`}
              >
                <Grid>
                  <CardCustom
                    className={classes.cardFirstPostContainer}
                    clickable
                  >
                    <CardCustom className={classes.cardFirstPostImgContainer}>
                      <Grid
                        item
                        style={{
                          backgroundImage: `url(${firstPost.featured_image})`,
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                          cursor: "pointer",
                          paddingBottom: "50%"
                        }}
                      />
                    </CardCustom>
                    <Grid
                      item
                      xs={12}
                      sm={9}
                      md={7}
                      className={classes.titleWrapper}
                    >
                      <CardCustom
                        className={classes.cardtitleContainer}
                        padding
                        visible
                      >
                        <Grid item className={classes.titleContainer}>
                          <Typography
                            variant="h4"
                            className={classes.title}
                            gutterBottom
                          >
                            {firstPost.title}
                          </Typography>
                          <Typography variant="h5" className={classes.subtitle}>
                            {firstPost.summary}
                          </Typography>
                        </Grid>
                        <Grid container alignItems="center">
                          <img
                            src={firstPost.author.profile_image}
                            alt="User avatar"
                            className={classes.avatar}
                          />
                          <Typography
                            variant="body2"
                            className={classes.author}
                          >
                            Written by {firstPost.author.first_name}{" "}
                            {firstPost.author.last_name}
                          </Typography>
                        </Grid>
                      </CardCustom>
                    </Grid>
                  </CardCustom>
                </Grid>
              </Link>
            </Panel>
          </Grid>
          <Panel paddingTop>
            <Typography
              variant="h6"
              className={classes.morePosts}
              align="center"
            >
              More Posts
            </Typography>
            <Grid
              container
              spacing={24}
              justify="space-evenly"
              className={classes.postWrapper}
            >
              {this.state.data.slice(1).map((post, key) => {
                return (
                  <Link
                    key={key}
                    as={`/blog/post/${post.slug}`}
                    href={`/blog/post?slug=${post.slug}`}
                  >
                    <Grid
                      item
                      xs={12}
                      sm={6}
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
                          <Typography variant="h5" className={classes.subtitle}>
                            {post.summary}
                          </Typography>
                        </Grid>
                      </CardCustom>
                    </Grid>
                  </Link>
                );
              })}
            </Grid>
          </Panel>
          <div>
            {previous_page && (
              <Link href={`/blog/${previous_page}`}>
                <a>Prev</a>
              </Link>
            )}

            {next_page && (
              <Link href={`/blog/${next_page}`}>
                <a>Next</a>
              </Link>
            )}
          </div>
          <Footer />
        </React.Fragment>
      );
    }
    return <React.Fragment>{blogContent}</React.Fragment>;
  }
}

Blog.propTypes = {
  classes: PropTypes.object.isRequired
};

Blog.getInitialProps = async ({ query }) => {
  return { query };
};

export default withStyles(styles)(Blog);
