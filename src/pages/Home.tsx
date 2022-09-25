import { Button, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { Component, ReactNode } from 'react';
import { WithTranslation, withTranslation } from 'react-i18next';
import i18n from '../locales/i18n';

type IProps = WithTranslation;

const lngs = {
  en: { nativeName: 'English' },
  fr: { nativeName: 'French' },
  it: { nativeName: 'Italy' },
  jp: { nativeName: 'Japan' },
} as {
  [key: string]: { nativeName: string };
};

class Home extends Component<IProps> {
  render(): ReactNode {
    return (
      <Container>
        <Typography variant='h2' component='h2'>
          {this.props.t('title')}
        </Typography>

        <br />
        {Object.keys(lngs).map(lng => (
          <Button
            key={lng}
            variant={i18n.resolvedLanguage === lng ? 'contained' : 'text'}
            onClick={() => i18n.changeLanguage(lng)}
          >
            {lngs[lng].nativeName}
          </Button>
        ))}
      </Container>
    );
  }
}

export default withTranslation()(Home);
