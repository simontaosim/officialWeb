'use strict';

import React from 'react';
import './OnePageSwitcher.css'
import {SectionsContainer, Section, Header, Footer} from 'react-fullpage';


class OnePageSwitcher extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let options = {
        activeClass:          'active', // the class that is appended to the sections links
        anchors:              [], // the anchors for each sections
        arrowNavigation:      true, // use arrow keys
        className:            'SectionContainer', // the class name for the section container
        delay:                1000, // the scroll animation speed
        navigation:           true, // use dots navigatio
        scrollBar:            false, // use the browser default scrollbar
        sectionClassName:     'Section', // the section class name
        sectionPaddingTop:    '0', // the section top padding
        sectionPaddingBottom: '0', // the section bottom padding
        verticalAlign:        false // align the content of each section vertical
      };

    return (
      <div>
      <Header>
          <a href="#sectionOne" className="opa">Section One</a>
          <a href="#sectionTwo">Section Two</a>
          <a href="#sectionThree">Section Three</a>
        </Header>
        <Footer>
          <a href="" className="opa">Dcoumentation</a>
          <a href="">Example Source</a>
          <a href="">About</a>
        </Footer>
        <SectionsContainer {...options}>
          <Section>Page 1</Section>
          <Section>Page 2</Section>
          <Section>Page 3</Section>
        </SectionsContainer>
      </div>
    );
  }
}

export default OnePageSwitcher;
