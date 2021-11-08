import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import ReactPlayer from 'react-player';
import {
  InfoCard,
  Header,
  Page,
  Content,
  ContentHeader,
  HeaderLabel,
  SupportButton,
} from '@backstage/core-components';
import { ExampleFetchComponent } from '../ExampleFetchComponent';

export const ExampleComponent = () => (
  <Page themeId="tool">
    <Header title="Welcome to TCS-Backstage!" subtitle="Video plugin">
      <HeaderLabel label="Owner" value="Team TCS" />
      <HeaderLabel label="Lifecycle" value="Alpha" />
    </Header>
    <Content>
      <ContentHeader title="Video Plugin">
        <SupportButton>A description of your plugin goes here.</SupportButton>
      </ContentHeader>
      <Grid container spacing={3} direction="column">
        <Grid item>
          <InfoCard title="Information card">
            <Typography variant="body1">
              This is Video plugin. 
            </Typography>
          </InfoCard>
        </Grid>
        <ReactPlayer url='https://www.youtube.com/watch?v=VwQsFsV1Evo&t=5s' />
        {/* <Grid item>
          <ExampleFetchComponent />
        </Grid> */}
      </Grid>
    </Content>
  </Page>
);
