import { Box, Button, Container, Grid, Heading, Image, Text } from "@chakra-ui/react"
import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { FiShoppingCart } from "react-icons/fi";
import { StoreContext } from "../../context/Corzine";

function Product() {
    const [data, setdata] = useState([])

    const [cart, setcart] = useContext(StoreContext)

    function handelAddCart(product) {
        const idProduct = []
        cart.map(el => {
            return idProduct.push(el.id)
        })
        if (!idProduct.includes(product.id)) {
            return setcart((el) => [...el, product])
        }
        console.log("roma");
    }

    useEffect(() => {
        axios.get("https://dummyjson.com/products")
        .then(api => {
            setdata(api.data.products)
        })
    },[])
    return (
        <>
        <Grid w={'100%'} templateColumns='repeat(4, 1fr)' gap={5}>
            {
                data.slice(0,4).map(el => {
                    return (
                        <Box position={'relative'} transition='all 0.5s ease' _hover={{boxShadow:"0 0 15px #f2f2f2", transform:'scale(101%)'}} w={'100%'} height={'400px'}  bg={'white'} border={'2px solid #f2f2f2'} borderRadius={'8px'} >
                            
                        <Image mb={"3%"} borderRadius={'8px'} key={el.id} src={el.thumbnail} alt="error in image" w='100%' h='100%' objectFit='cover' maxH='300px' />
                        <Box  p={'1% 5%'}>
                            <Text fontSize={'18px'} fontWeight={'400'} key={el.id}>{el.title}</Text>
                            <Box  alignItems={'center'} justifyContent={'space-between'} display={'flex'}>
                                <Heading fontSize={'22px'} key={el.id}>{el.price} Som</Heading>
                                <Button variant={'outline'} colorScheme="purple" _hover={{variant:'solid',bg:'#5946de',color:"white"}} onClick={() => handelAddCart(el)}><FiShoppingCart/></Button>
                            </Box>
                            </Box>
                        </Box>
                    )
                })
            }
        </Grid>
        </>
    )
}

export default Product