import React from "react";

import { Box, Center, Heading, Input, FormControl, VStack, Text, Button,Checkbox,HStack} from 'native-base';

export default function SingIn() {
  return (
    <Center
      height="full"
      background="purple.700"
    >
      <Box width={"5/6"}>

        <Center>
          <VStack space={10}>
            <FormControl>
            <Box
              width={"72"}
              backgroundColor={"purple.500"}
              height={254}
              borderRadius={"25"}
              borderTopRightRadius={'none'}
              justifyContent={"center"}
            >
              <Center >

                <Box>
                  <FormControl.Label><Text color={"white"} fontSize={16} fontWeight={"bold"}>E-mail</Text></FormControl.Label>
                  <Input
                    placeholder="Seu@email.com"
                    mb={43}
                    borderRadius="2xl"
                    borderWidth={"3"}
                    height={42}
                    borderColor="white"
                    backgroundColor="white"
                    fontSize={16}
                    fontWeight={"bold"}
                    width={252}
                  />
                </Box>
              </Center>
              <Center>
                <Box>
                  <FormControl.Label><Text color={"white"} fontSize={16} fontWeight={"bold"}>Senha</Text></FormControl.Label>
                  <Input
                    placeholder="Sua Senha"
                    fontSize={16}
                    fontWeight={"bold"}
                    mb={3}
                    borderRadius="2xl"
                    borderWidth={"3"}
                    height={42}
                    borderColor="white"
                    backgroundColor="white"
                    width={252}
                  />
                </Box>
              </Center>
            </Box>
              <HStack  mt={28}>
                <Checkbox ml={10} value="agree"></Checkbox>
                <Text ml={2} color={"white"}>Remember?</Text>
              </HStack>
            <Button
            width={124}
            height={55}
            borderColor={"purple.500"}
            borderWidth={4}
            backgroundColor={"purple.700"}
            borderRadius={100}
            alignSelf={"center"}
            mt={28}
            >Entrar</Button>
            </FormControl>
          </VStack>
        </Center>

      </Box>
    </Center>
  );
}
