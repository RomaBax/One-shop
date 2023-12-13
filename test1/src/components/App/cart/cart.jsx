import { Box, Button, Checkbox, Container, Heading, Image, Text } from "@chakra-ui/react"
import { useContext, useEffect, useState } from "react"
import { StoreContext } from "../../context/Corzine"
import { RiDeleteBinLine } from "react-icons/ri";

function Cart() {
    const {element} = useContext(StoreContext)
    const [counter, setCounter] = useState(1);
    const [cart, setcart] = useContext(StoreContext)
        // const [priseAll, setPriceAll] = useState(0)
        // const price = cart.map(el => el.price)
        const increase = () => {
            setCounter(count => count + 1);
            // await setPriceAll(priceAll => price*(counter+1))
        };
        const decrease = () => {
            if (counter > 1) {
                setCounter(count => count - 1);
                // setPriceAll(priceAll => price*(counter-1))  
            }
        };


    return(
        <>
        <Container maxW={1530}>
            <Heading display={'block'}>Корзина</Heading>
        </Container>
        <Container display={'flex'} maxW={1530}>
           
            
            <Box>
            {
        !cart.length && <Heading my={10}fontSize={60} textAlign={'center'}>Еще нет товара !</Heading>
      }
            {
                cart.map(el => {
                    return(
                        <Box>
                            
                            <Box justifyContent={'space-evenly'} p={'1%'} alignItems={'center'} w={'100%'} border={'1px solid #f2f2f2'} display={'flex'}>
                            <Checkbox size='lg' colorScheme='purple' defaultChecked/>
                                <Box w={'10%'}>
                                    <Image src={el.thumbnail}/>
                                </Box>
                                <Box w={'40%'}>
                                    <Text fontWeight={'800'}>{el.title}</Text>
                                    <Text>{el.description}</Text>
                                </Box>

                                <Box  display='flex' flexDirection='column' alignItems='center'>
                                <Box p={'3px'} w='120px' alignItems={'center'} justifyContent='space-between' borderRadius={'58px'} bg={'#f2f2f2'} display={'flex'}>
                                <Button boxShadow={'0px 0px 2px #b8b8b8'} bg={'white'} borderRadius={'50%'} onClick={decrease }>-</Button>
                                <Text key={el.id}>{counter}</Text>
                                <Button boxShadow={'0px 0px 2px #b8b8b8'} bg={'white'} borderRadius={'50%'} onClick={increase}>+</Button>
                                </Box>
                                {/* <Text color='gray' fontWeight='300' fontSize='13px'>1 шт = {price} som</Text> */}
                                </Box>
                                <Heading size={'md'}>{el.price} som</Heading>
                                <Button _hover={{color:'red'}} variant={'unstyled'}> <RiDeleteBinLine/> </Button>
                            </Box>
                           
                        </Box>
                        
                    )
                })
            }
            </Box>
            
            <Box right={'0'} width={'30%'} border={'1px solid #f2f2f2'}>
                <Box w={'100%'} p={"5%"} borderBottom={'2px solid #f2f2f2'}>
                <Heading size={'lg'}>Ваш заказ</Heading>
                </Box>
                <Box>
                    <Box justifyContent={'space-between'} alignItems={'center'} display={'flex'}>
                        <Text>Товары</Text>
                        <Text> {element} </Text>
                    </Box>
                </Box>
            </Box>
            
        </Container>
        </>
    )
}
export default Cart