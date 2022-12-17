import { SideBarContainer, Box, Title, P, Span, TextBox, Ul, Li } from './SideBar.styled';

export const SideBar = () => {
    return (
        <Box>
            <SideBarContainer>
                <Title>Summary for <span>20/06/2020</span></Title>
                <TextBox>
                    <ul>
                        <li>
                            <P>
                                <Span>Left</Span>
                            </P>
                        </li>
                        <li>
                            <P>
                                <Span>Consumed</Span>
                            </P>
                        </li>
                        <li>
                            <P>
                                <Span>Daily rate</Span>
                            </P>
                        </li>
                        <li>
                            <P>
                                <Span>n% of normal</Span>
                            </P>
                        </li>
                    </ul>

                    <Ul>
                        <Li>
                            <P>
                                <Span>625 kcal</Span>
                            </P>
                        </Li>
                        <Li>
                            <P>
                                <Span>2175 kcal</Span>
                            </P>
                        </Li>
                        <Li>
                            <P>
                                <Span>2800 kcal</Span>
                            </P>
                        </Li>
                        <Li>
                            <P>
                                <Span>78 %</Span>
                            </P>
                        </Li>
                    </Ul>
                </TextBox>
          </SideBarContainer>
          <SideBarContainer>
            <Title>Food not recommended</Title>
            <ul>
                <li>
                    <P>
                        <span>Flour products</span>
                    </P>
                </li>
                <li>
                    <P>
                        <span>Milk</span>
                    </P>
                </li>
                <li>
                    <P>
                        <span>Read meat</span>
                    </P>
                </li>
                <li>
                    <P>
                        <span>Smoked meats</span>
                    </P>
                </li>
            </ul>
        </SideBarContainer>
        </Box>
    )
}