// material-ui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

// third party
import Marquee from 'react-fast-marquee';

// project import
import Animation from './Animation';
import { ThemeDirection, ThemeMode } from 'config';

// assets
const techCI = 'assets/images/landing/technology/tech-ci.png';
const techAngular = 'assets/images/landing/technology/tech-angular.png';
const techBootstrap = 'assets/images/landing/technology/tech-bootstrap.png';
const techDotnet = 'assets/images/landing/technology/tech-dot-net.png';
const techVue = 'assets/images/landing/technology/tech-vue.png';

const techCIDark = 'assets/images/landing/technology/tech-ci-dark.png';
const techAngularDark = 'assets/images/landing/technology/tech-angular-dark.png';
const techBootstrapDark = 'assets/images/landing/technology/tech-bootstrap-dark.png';
const techDotnetDark = 'assets/images/landing/technology/tech-dot-net-dark.png';
const techVueDark = 'assets/images/landing/technology/tech-vue-dark.png';

// ================================|| SLIDER - ITEMS ||================================ //

function Item({ item }: { item: { text: string; highlight?: boolean } }) {
  return (
    <Typography
      variant="h2"
      sx={{
        cursor: 'pointer',
        fontWeight: 600,
        my: 1,
        mx: 4.5,
        transition: 'all 0.3s ease-in-out',
        opacity: item.highlight ? 0.75 : 0.4,
        '&:hover': { opacity: '1' }
      }}
    >
      {item.text}
    </Typography>
  );
}

// ==============================|| LANDING - PARTNER PAGE ||============================== //

export default function PartnerBlock() {
  const theme = useTheme();

  const partnerimage = [
    {
      image: theme.palette.mode === ThemeMode.DARK ? techCIDark : techCI,
      link: 'https://codedthemes.com/item/mantis-codeigniter-admin-template/'
    },
    {
      image: theme.palette.mode === ThemeMode.DARK ? techAngularDark : techAngular,
      link: 'https://codedthemes.com/item/mantis-angular-admin-template/'
    },
    {
      image: theme.palette.mode === ThemeMode.DARK ? techBootstrapDark : techBootstrap,
      link: 'https://codedthemes.com/item/mantis-bootstrap-admin-dashboard/'
    },
    {
      image: theme.palette.mode === ThemeMode.DARK ? techDotnetDark : techDotnet,
      link: 'https://codedthemes.com/item/mantis-dotnet-bootstrap-dashboard-template/'
    },
    {
      image: theme.palette.mode === ThemeMode.DARK ? techVueDark : techVue,
      link: 'https://codedthemes.com/item/mantis-vue-admin-template/'
    }
  ];

  const items = [
    { text: 'Auth Methods' },
    { text: '150+ Pages' },
    { text: '6+ Preset Colors' },
    { text: '50+ Widgets' },
    { text: 'Best User Experience' },
    { text: 'Live Customizer' },
    { text: '5+ Apps' },
    { text: 'Material UI v5' },
    { text: 'Highly Flexible' },
    { text: 'Always Updated' },
    { text: 'Professional Design' },
    { text: 'TypeScript Support' },
    { text: 'Figma Design' },
    { text: 'Dark Layout' },
    { text: 'RTL Support' },
    { text: 'Retina Ready' },
    { text: 'Prettier Code' },
    { text: 'i18n Support' }
  ];

  return (
    <Box sx={{ overflowX: 'hidden' }}>
      <Container>
        <Grid container alignItems="center" justifyContent="center" spacing={2} sx={{ mt: { md: 15, xs: 2.5 }, mb: { md: 5, xs: 2.5 } }}>
          <Grid item xs={12}>
            <Grid container spacing={1} justifyContent="center" sx={{ mb: 4, textAlign: 'center' }}>
              <Grid item sm={10} md={6}>
                <Grid container spacing={1} justifyContent="center">
                  <Grid item xs={12}>
                    <Typography variant="subtitle1" color="primary">
                      Multiple Tech Stack
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h2">Available Technology</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body1">
                      Mantis is available in multiple technologies. Simply click to dive in and discover the perfect solution for your
                      needs. Each sold{' '}
                      <Link variant="subtitle1" href="https://codedthemes.gitbook.io/mantis/mantis-eco-system" target="_blank">
                        separately
                      </Link>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={5} justifyContent="center" sx={{ mb: 4, textAlign: 'center' }}>
              {partnerimage.map((item, index) => (
                <Grid item key={index}>
                  <Animation
                    variants={{
                      visible: { opacity: 1 },
                      hidden: { opacity: 0 }
                    }}
                  >
                    <Link href={item.link} target="_blank">
                      <Box
                        component="img"
                        src={item.image}
                        alt="feature"
                        sx={{
                          transition: 'transform 0.3s ease, opacity 0.3s ease',
                          '&:hover': {
                            transform: 'scale(1.1)',
                            opacity: 0.8
                          }
                        }}
                      />
                    </Link>
                  </Animation>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Grid container spacing={4}>
        <Grid item xs={12} sx={{ direction: theme.direction }}>
          <Marquee pauseOnHover direction={theme.direction === ThemeDirection.RTL ? 'right' : 'left'}>
            {items.map((item, index) => (
              <Item key={index} item={item} />
            ))}
          </Marquee>
        </Grid>
        <Grid item xs={12} sx={{ direction: theme.direction }}>
          <Marquee pauseOnHover direction={theme.direction === ThemeDirection.RTL ? 'left' : 'right'}>
            {items.map((item, index) => (
              <Item key={index} item={item} />
            ))}
          </Marquee>
        </Grid>
      </Grid>
    </Box>
  );
}
