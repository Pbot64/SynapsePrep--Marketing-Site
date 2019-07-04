// Node Modules
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

// Material UI Components
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

// Local Components
import Header from '../components/Header';
import Panel from '../components/Panel';
import Footer from '../components/Footer';

// Local Assets
import underConstruction from '../static/images/under-construction.svg';

//  Style Overrides
const styles = theme => ({
  root: {},
  mainContainer: {
    margin: '50px 0px',
  },
  title: {
    marginTop: '20px',
    marginBottom: '10px',
    fontSize: '20px',
    [theme.breakpoints.up('sm')]: {
      fontSize: '30px',
    },
  },
});

const Legal = props => {
  const { classes } = props;
  return (
    <React.Fragment>
      <Grid item className={classes.root}>
        <Header backgroundColor="blueToPurple" />
        <Panel padding>
          <Grid container justify="center" direction="column" alignItems="center">
            <Grid item xs={12} sm={8} md={6} className={classes.mainContainer}>
              <Typography variant="h3">Terms and Condintions</Typography>
              <p>
                These terms and conditions outline the rules and regulations for the use of Synapse
                Prep LLC.
              </p>
              <p>
                By accessing this website we assume you accept these terms and conditions in full.
                Do not continue to use Synapse Prep's website if you do not accept all of the terms
                and conditions stated on this page.
              </p>
              <p>
                The following terminology applies to these Terms and Conditions, Privacy Statement
                and Disclaimer Notice and any or all Agreements: "Client", "You" and "Your" refers
                to you, the person accessing this website and accepting the Company's terms and
                conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company.
                "Party", "Parties", or "Us", refers to both the Client and ourselves, or either the
                Client or ourselves. All terms refer to the offer, acceptance and consideration of
                payment necessary to undertake the process of our assistance to the Client in the
                most appropriate manner, whether by formal meetings of a fixed duration, or any
                other means, for the express purpose of meeting the Client's needs in respect of
                provision of the Company's stated services/products, in accordance with and subject
                to, prevailing law of United States. Any use of the above terminology or other words
                in the singular, plural, capitalisation and/or he/she or they, are taken as
                interchangeable and therefore as referring to same.
              </p>
              <h2>Cookies</h2>
              <p>
                We employ the use of cookies. By using Synapse Prep's website you consent to the use
                of cookies in accordance with Synapse Prep's privacy policy.
              </p>
              <p>
                Most of the modern day interactive web sites use cookies to enable us to retrieve
                user details for each visit. Cookies are used in some areas of our site to enable
                the functionality of this area and ease of use for those people visiting. Some of
                our affiliate / advertising partners may also use cookies.
              </p>
              <h2>License</h2>
              <p>
                Unless otherwise stated, Synapse Prep and/or it's licensors own the intellectual
                property rights for all material on Synapse Prep. All intellectual property rights
                are reserved. You may view and/or print pages from https://synapseprep.net for your
                own personal use subject to restrictions set in these terms and conditions.
              </p>
              <p>You must not:</p>
              <ol>
                <li>Republish material from https://synapseprep.net</li>
                <li>Sell, rent or sub-license material from https://synapseprep.net</li>
                <li>Reproduce, duplicate or copy material from https://synapseprep.net</li>
              </ol>
              <p>
                Redistribute content from Synapse Prep (unless content is specifically made for
                redistribution).
              </p>
              <h2>Hyperlinking to our Content</h2>
              <ol>
                <li>
                  The following organizations may link to our Web site without prior written
                  approval:
                  <ol>
                    <li>Government agencies;</li>
                    <li>Search engines;</li>
                    <li>News organizations;</li>
                    <li>
                      Online directory distributors when they list us in the directory may link to
                      our Web site in the same manner as they hyperlink to the Web sites of other
                      listed businesses; and
                    </li>
                    <li>
                      Systemwide Accredited Businesses except soliciting non-profit organizations,
                      charity shopping malls, and charity fundraising groups which may not hyperlink
                      to our Web site.
                    </li>
                  </ol>
                </li>
              </ol>
              <ol start="2">
                <li>
                  These organizations may link to our home page, to publications or to other Web
                  site information so long as the link: (a) is not in any way misleading; (b) does
                  not falsely imply sponsorship, endorsement or approval of the linking party and
                  its products or services; and (c) fits within the context of the linking party's
                  site.
                </li>
                <li>
                  We may consider and approve in our sole discretion other link requests from the
                  following types of organizations:
                  <ol>
                    <li>
                      commonly-known consumer and/or business information sources such as Chambers
                      of Commerce, American Automobile Association, AARP and Consumers Union;
                    </li>
                    <li>dot.com community sites;</li>
                    <li>
                      associations or other groups representing charities, including charity giving
                      sites,
                    </li>
                    <li>online directory distributors;</li>
                    <li>internet portals;</li>
                    <li>
                      accounting, law and consulting firms whose primary clients are businesses; and
                    </li>
                    <li>educational institutions and trade associations.</li>
                  </ol>
                </li>
              </ol>
              <p>
                We will approve link requests from these organizations if we determine that: (a) the
                link would not reflect unfavorably on us or our accredited businesses (for example,
                trade associations or other organizations representing inherently suspect types of
                business, such as work-at-home opportunities, shall not be allowed to link); (b)the
                organization does not have an unsatisfactory record with us; (c) the benefit to us
                from the visibility associated with the hyperlink outweighs the absence of Synapse
                Prep; and (d) where the link is in the context of general resource information or is
                otherwise consistent with editorial content in a newsletter or similar product
                furthering the mission of the organization.
              </p>
              <p>
                These organizations may link to our home page, to publications or to other Web site
                information so long as the link: (a) is not in any way misleading; (b) does not
                falsely imply sponsorship, endorsement or approval of the linking party and it
                products or services; and (c) fits within the context of the linking party's site.
              </p>
              <p>
                If you are among the organizations listed in paragraph 2 above and are interested in
                linking to our website, you must notify us by sending an e-mail to{' '}
                <a
                  href="mailto:support@synapseprep.net"
                  title="send an email to support@synapseprep.net"
                >
                  support@synapseprep.net
                </a>
                . Please include your name, your organization name, contact information (such as a
                phone number and/or e-mail address) as well as the URL of your site, a list of any
                URLs from which you intend to link to our Web site, and a list of the URL(s) on our
                site to which you would like to link. Allow 2-3 weeks for a response.
              </p>
              <p>Approved organizations may hyperlink to our Web site as follows:</p>
              <ol>
                <li>By use of our corporate name; or</li>
                <li>By use of the uniform resource locator (Web address) being linked to; or</li>
                <li>
                  By use of any other description of our Web site or material being linked to that
                  makes sense within the context and format of content on the linking party's site.
                </li>
              </ol>
              <p>
                No use of Synapse Prep's logo or other artwork will be allowed for linking absent a
                trademark license agreement.
              </p>
              <h2>Iframes</h2>
              <p>
                Without prior approval and express written permission, you may not create frames
                around our Web pages or use other techniques that alter in any way the visual
                presentation or appearance of our Web site.
              </p>
              <h2>Reservation of Rights</h2>
              <p>
                We reserve the right at any time and in its sole discretion to request that you
                remove all links or any particular link to our Web site. You agree to immediately
                remove all links to our Web site upon such request. We also reserve the right to
                amend these terms and conditions and its linking policy at any time. By continuing
                to link to our Web site, you agree to be bound to and abide by these linking terms
                and conditions.
              </p>
              <h2>Removal of links from our website</h2>
              <p>
                If you find any link on our Web site or any linked web site objectionable for any
                reason, you may contact us about this. We will consider requests to remove links but
                will have no obligation to do so or to respond directly to you.
              </p>
              <p>
                Whilst we endeavour to ensure that the information on this website is correct, we do
                not warrant its completeness or accuracy; nor do we commit to ensuring that the
                website remains available or that the material on the website is kept up to date.
              </p>
              <h2>Content Liability</h2>
              <p>
                We shall have no responsibility or liability for any content appearing on your Web
                site. You agree to indemnify and defend us against all claims arising out of or
                based upon your Website. No link(s) may appear on any page on your Web site or
                within any context containing content or materials that may be interpreted as
                libelous, obscene or criminal, or which infringes, otherwise violates, or advocates
                the infringement or other violation of, any third party rights.
              </p>
              <h2>Disclaimer</h2>
              <p>
                To the maximum extent permitted by applicable law, we exclude all representations,
                warranties and conditions relating to our website and the use of this website
                (including, without limitation, any warranties implied by law in respect of
                satisfactory quality, fitness for purpose and/or the use of reasonable care and
                skill). Nothing in this disclaimer will:
              </p>
              <ol>
                <li>
                  limit or exclude our or your liability for death or personal injury resulting from
                  negligence;
                </li>
                <li>
                  limit or exclude our or your liability for fraud or fraudulent misrepresentation;
                </li>
                <li>
                  limit any of our or your liabilities in any way that is not permitted under
                  applicable law; or
                </li>
                <li>
                  exclude any of our or your liabilities that may not be excluded under applicable
                  law.
                </li>
              </ol>
              <p>
                The limitations and exclusions of liability set out in this Section and elsewhere in
                this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all
                liabilities arising under the disclaimer or in relation to the subject matter of
                this disclaimer, including liabilities arising in contract, in tort (including
                negligence) and for breach of statutory duty.
              </p>
              <p>
                To the extent that the website and the information and services on the website are
                provided free of charge, we will not be liable for any loss or damage of any nature.
              </p>
              <br />
              <br />
              <Typography variant="h3">Privacy Policy</Typography>
              <h3>Your privacy is critically important to us.</h3>

              <p>
                It is Synapse Prep's policy to respect your privacy regarding any information we may
                collect while operating our website. This Privacy Policy applies to{' '}
                <a href="https://synapseprep.net">https://synapseprep.net</a> (hereinafter, "us",
                "we", or "https://synapseprep.net"). We respect your privacy and are committed to
                protecting personally identifiable information you may provide us through the
                Website. We have adopted this privacy policy ("Privacy Policy") to explain what
                information may be collected on our Website, how we use this information, and under
                what circumstances we may disclose the information to third parties. This Privacy
                Policy applies only to information we collect through the Website and does not apply
                to our collection of information from other sources.
              </p>
              <p>
                This Privacy Policy, together with the Terms and conditions posted on our Website,
                set forth the general rules and policies governing your use of our Website.
                Depending on your activities when visiting our Website, you may be required to agree
                to additional terms and conditions.
              </p>
              <h2>Website Visitors</h2>
              <p>
                Like most website operators, Synapse Prep collects non-personally-identifying
                information of the sort that web browsers and servers typically make available, such
                as the browser type, language preference, referring site, and the date and time of
                each visitor request. Synapse Prep's purpose in collecting non-personally
                identifying information is to better understand how Synapse Prep's visitors use its
                website. From time to time, Synapse Prep may release non-personally-identifying
                information in the aggregate, e.g., by publishing a report on trends in the usage of
                its website.
              </p>
              <p>
                Synapse Prep also collects potentially personally-identifying information like
                Internet Protocol (IP) addresses for logged in users and for users leaving comments
                on https://synapseprep.net blog posts. Synapse Prep only discloses logged in user
                and commenter IP addresses under the same circumstances that it uses and discloses
                personally-identifying information as described below.
              </p>
              <h2>Gathering of Personally-Identifying Information</h2>
              <p>
                Certain visitors to Synapse Prep's websites choose to interact with Synapse Prep in
                ways that require Synapse Prep to gather personally-identifying information. The
                amount and type of information that Synapse Prep gathers depends on the nature of
                the interaction. For example, we ask visitors who sign up for a blog at
                https://synapseprep.net to provide a username and email address.
              </p>
              <h2>Security</h2>
              <p>
                The security of your Personal Information is important to us, but remember that no
                method of transmission over the Internet, or method of electronic storage is 100%
                secure. While we strive to use commercially acceptable means to protect your
                Personal Information, we cannot guarantee its absolute security.
              </p>
              <h2>Advertisements</h2>
              <p>
                Ads appearing on our website may be delivered to users by advertising partners, who
                may set cookies. These cookies allow the ad server to recognize your computer each
                time they send you an online advertisement to compile information about you or
                others who use your computer. This information allows ad networks to, among other
                things, deliver targeted advertisements that they believe will be of most interest
                to you. This Privacy Policy covers the use of cookies by Synapse Prep and does not
                cover the use of cookies by any advertisers.
              </p>
              <h2>Links To External Sites</h2>
              <p>
                Our Service may contain links to external sites that are not operated by us. If you
                click on a third party link, you will be directed to that third party's site. We
                strongly advise you to review the Privacy Policy and terms and conditions of every
                site you visit.
              </p>
              <p>
                We have no control over, and assume no responsibility for the content, privacy
                policies or practices of any third party sites, products or services.
              </p>
              <h2>Aggregated Statistics</h2>
              <p>
                Synapse Prep may collect statistics about the behavior of visitors to its website.
                Synapse Prep may display this information publicly or provide it to others. However,
                Synapse Prep does not disclose your personally-identifying information.
              </p>
              <h2>Cookies</h2>
              <p>
                To enrich and perfect your online experience, Synapse Prep uses "Cookies", similar
                technologies and services provided by others to display personalized content,
                appropriate advertising and store your preferences on your computer.
              </p>
              <p>
                A cookie is a string of information that a website stores on a visitor's computer,
                and that the visitor's browser provides to the website each time the visitor
                returns. Synapse Prep uses cookies to help Synapse Prep identify and track visitors,
                their usage of https://synapseprep.net, and their website access preferences.
                Synapse Prep visitors who do not wish to have cookies placed on their computers
                should set their browsers to refuse cookies before using Synapse Prep's websites,
                with the drawback that certain features of Synapse Prep's websites may not function
                properly without the aid of cookies.
              </p>
              <p>
                By continuing to navigate our website without changing your cookie settings, you
                hereby acknowledge and agree to Synapse Prep's use of cookies.
              </p>
              <h2>E-commerce</h2>
              <p>
                Those who engage in transactions with Synapse Prep – by purchasing Synapse Prep's
                services or products, are asked to provide additional information, including as
                necessary the personal and financial information required to process those
                transactions. In each case, Synapse Prep collects such information only insofar as
                is necessary or appropriate to fulfill the purpose of the visitor's interaction with
                Synapse Prep. Synapse Prep does not disclose personally-identifying information
                other than as described below. And visitors can always refuse to supply
                personally-identifying information, with the caveat that it may prevent them from
                engaging in certain website-related activities.
              </p>
              <h2>Privacy Policy Changes</h2>
              <p>
                Although most changes are likely to be minor, Synapse Prep may change its Privacy
                Policy from time to time, and in Synapse Prep's sole discretion. Synapse Prep
                encourages visitors to frequently check this page for any changes to its Privacy
                Policy. Your continued use of this site after any change in this Privacy Policy will
                constitute your acceptance of such change.
              </p>
              <h2 />
              <p />
            </Grid>
          </Grid>
        </Panel>
      </Grid>
      <Footer />
    </React.Fragment>
  );
};

Legal.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Legal);
