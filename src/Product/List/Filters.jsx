import React from 'react';
import styled from 'styled-components';
import Filter from './Filter';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1.5rem;
  margin-right: -.5rem;
  white-space: nowrap;
  align-items: center;
  overflow-x: scroll;
  display: flex;

  @media screen and (min-width: 48rem) {
    margin-right: 0;
  }
`;

const Group = styled.div`
  display: flex;

  &:last-child {
    button {
      margin-right: 0.5rem;
    }
  }
`;

export default () =>
  (<Wrapper>
    <Group>
      <Filter title="Category" filterOpened={this.state.filterOpened} onClick={this.handleClick}>
        Content content content content content content content<br />
        content content content content content content content<br />
        content content content content content content content<br />
        content content content content content content content
      </Filter>
      <Filter title="Colour" filterOpened={this.state.filterOpened} onClick={this.handleClick}>
        <input type="checkbox" />
        <span>Example checkbox</span>
      </Filter>
      <Filter title="Size" filterOpened={this.state.filterOpened} onClick={this.handleClick}>
        Content content content content content content content<br />
        content content content content content content content<br />
        content content content content content content content<br />
        content content content content content content content<br />
        content content content content content content content<br />
        content content content content content content content content
      </Filter>
    </Group>
    <Group>
      <Filter
        title="Sort by price"
        right
        filterOpened={this.state.filterOpened}
        onClick={this.handleClick}
      >
        high or<br />
        low<br />
        it’s medium length of<br />
        content
      </Filter>
    </Group>
  </Wrapper>);
