import {
  Box,
  Divider,
  HStack,
  Select,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import CustomBox from "../DashBoard/CustomBox";
import { MdPendingActions } from "react-icons/md";
import { FaThumbsUp } from "react-icons/fa";
import ComplaintsMetrics from "./ComplaintsMetrics";
import SectionHeading from "../DashBoard/SectionHeading";
import ComplaintsTable from "./COmplaintsTable";
import { sampleTicketsData } from "../../utils/fakedata";

function Complaints({ baseUrl }) {
  const [type, setType] = useState("all");
  return (
    <Stack spacing="5">
      <CustomBox>
        <SimpleGrid columns={[1, 1, 1, 2]} spacing="5">
          <ComplaintsMetrics
            icon={MdPendingActions}
            stat={6848}
            title="Pending complaints"
            colors={["yellow.500", "yellow.200"]}
          />
          <ComplaintsMetrics
            icon={FaThumbsUp}
            stat={6848}
            title="Resolved complaints"
            colors={["green.500", "green.200"]}
          />
        </SimpleGrid>
      </CustomBox>
      <Box>
        <CustomBox>
          <SectionHeading>
            {" "}
            {type === "all" ? (
              "COMPLAINTS"
            ) : (
              <Box as="span" textTransform={"uppercase"}>
                {type} COMPLAINTS
              </Box>
            )}
            <Box color="blue.500" as="span">
              (233 Tickets)
            </Box>
          </SectionHeading>
        </CustomBox>
        <Divider />
        <CustomBox>
          <HStack justify={"flex-end"}>
            <Box>Filter : </Box>
            <Box>
              <Select size="sm" onChange={(e) => setType(e.target.value)}>
                <option value="all">All</option>
                <option value="pending">Pending</option>
                <option value="resolved">Resolved</option>
              </Select>
            </Box>
          </HStack>
        </CustomBox>

        <ComplaintsTable baseUrl={baseUrl} complaintsData={sampleTicketsData} />
      </Box>
    </Stack>
  );
}

export default Complaints;
