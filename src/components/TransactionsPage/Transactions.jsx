import { Box, Divider, HStack, Select } from "@chakra-ui/react";
import React, { useState } from "react";
import SectionHeading from "../DashBoard/SectionHeading";
import CustomBox from "../DashBoard/CustomBox";
import TransactionsTable from "./TranscationsTable";
import { sampleTransactions } from "../../utils/fakedata";

function Transactions({ baseUrl }) {
  const [type, setType] = useState("all");

  return (
    <Box>
      <CustomBox>
        <SectionHeading>
          {" "}
          {type === "all" ? (
            "TRANSACTION HISTORY"
          ) : (
            <Box as="span" textTransform={"uppercase"}>
              {type} Transactions
            </Box>
          )}
        </SectionHeading>
      </CustomBox>
      <Divider />
      <CustomBox>
        <HStack justify={"flex-end"}>
          <Box>Filter : </Box>
          <Box>
            <Select size="sm" onChange={(e) => setType(e.target.value)}>
              <option value="all">All</option>
              <option value="recent">Recent</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
              <option value="declined">Declined</option>
            </Select>
          </Box>
        </HStack>
        <TransactionsTable
          transactionData={sampleTransactions}
          baseUrl={baseUrl}
        />
      </CustomBox>
    </Box>
  );
}

export default Transactions;
