import React, { useState, useCallback } from "react";
import { pediatricUrl, cardiologistsUrl, dentistsUrl } from "../assets/url";
import {
  Button,
  Box,
  Select,
  Input,
  SimpleGrid,
  Flex,
  Text,
  FormControl,
} from "@chakra-ui/react";
import axios from "axios";
import { useSelector } from "react-redux";

const SearchFuntionality = React.memo(
  ({
    setLoading,
    setCurrSpeciality,
    setTotalPages,
    setCurrData,
    setRequestUrl,
    setCurrPage,
    currSpeciality,
  }) => {
    let [doctorName, setDoctorName] = useState("");
    let [speciality, setSpeciality] = useState("");

    //search data from home page
    const doctorData = useSelector((state) => state.homeDoc);
    // const dispatch = useDispatch();

    const findThisSpecialityDoctor = (speciality) => {
      setCurrSpeciality(speciality);
      if (speciality === "Pediatric")
        setRequestUrl(`${pediatricUrl}?_limit=4&`);
      else if (speciality === "Cardiologist")
        setRequestUrl(`${cardiologistsUrl}?_limit=4&`);
      else if (speciality === "Dentist")
        setRequestUrl(`${dentistsUrl}?_limit=4&`);
      setCurrPage(1);
    };

    const handleInputSearch = useCallback(() => {
      setLoading(true);
      let url = "";
      if (speciality === "Pediatric") url = pediatricUrl;
      else if (speciality === "Cardiologist") url = cardiologistsUrl;
      else if (speciality === "Dentist") url = dentistsUrl;

      if (doctorName !== "") {
        setTotalPages(1);
        axios
          .get(`${url}?name=${doctorName}`)
          .then((res) => {
            setLoading(false);
            setCurrData(res.data);
          })
          .catch((err) => console.log(err));
      }
    }, [doctorName, speciality]);

    return (
      <Box
        w={{ base: "90%", md: "80%" }}
        m="auto"
        h={"fit-content"}
        borderRadius="10px"
        boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"}
        bg="white"
      >
        <SimpleGrid
          columns={3}
          minChildWidth={"100px"}
          m={"auto"}
          mt={"30px"}
          w="50%"
          pr={10}
        >
          <Button
            color={currSpeciality === "Pediatric" ? "#2f4e44" : "#658a71"}
            variant="link"
            fontSize="20px"
            mx={30}
            mt={{ base: "10px", md: "15px" }}
            _hover={{
              color: "#2f4e44",
            }}
            onClick={() => findThisSpecialityDoctor("Pediatric")}
          >
            Pediatric
          </Button>
          <Button
            color={currSpeciality === "Dentist" ? "#2f4e44" : "#658a71"}
            variant="link"
            fontSize="20px"
            mx={30}
            mt={{ base: "10px", md: "15px" }}
            _hover={{
              color: "#2f4e44",
            }}
            onClick={() => findThisSpecialityDoctor("Dentist")}
          >
            Dentist
          </Button>
          <Button
            color={currSpeciality === "Cardiologist" ? "#2f4e44" : "#658a71"}
            variant="link"
            fontSize="20px"
            mx={30}
            mt={{ base: "10px", md: "15px" }}
            _hover={{
              color: "#2f4e44",
            }}
            onClick={() => findThisSpecialityDoctor("Cardiologist")}
          >
            Cardiologist
          </Button>
        </SimpleGrid>

      </Box>
    );
  }
);

export default SearchFuntionality;
