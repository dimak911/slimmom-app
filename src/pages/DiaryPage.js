import { SideBar } from '../components/SideBar/SideBar';
import { DailyCaloriesForm } from '../components/DailyCaloriesForm';
import { DairyProductList } from '../components/DairyProductList/DairyProductList';
import styled from 'styled-components';
import { Container } from '../components/Container.styled';
const DiaryPage = () => {
    return (
        <Container>
            <Box>
                <DailyCaloriesForm />
               {/* <DairyProductList /> */}
                <SideBar />
            </Box>
        </Container>
    )
}

export default DiaryPage;

export const Box = styled.div`
    @media screen and (min-width: 1280px) {
        display: flex;
        justify-content: center;
    }
  
`;