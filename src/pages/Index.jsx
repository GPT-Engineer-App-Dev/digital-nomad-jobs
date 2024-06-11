import { useState } from "react";
import { Container, VStack, Text, Select, Box, Heading, Stack } from "@chakra-ui/react";

const jobs = [
  { id: 1, title: "Frontend Developer", category: "Engineering" },
  { id: 2, title: "Product Manager", category: "Product" },
  { id: 3, title: "UX Designer", category: "Design" },
  { id: 4, title: "Backend Developer", category: "Engineering" },
  { id: 5, title: "UI Designer", category: "Design" },
];

const Index = () => {
  const [filter, setFilter] = useState("");

  const filteredJobs = filter
    ? jobs.filter((job) => job.category === filter)
    : jobs;

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl" mb={6}>
          Remote Tech Jobs
        </Heading>
        <Select
          placeholder="Filter by category"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="Product">Product</option>
          <option value="Design">Design</option>
          <option value="Engineering">Engineering</option>
        </Select>
        <Stack spacing={4} width="100%">
          {filteredJobs.map((job) => (
            <Box
              key={job.id}
              p={5}
              shadow="md"
              borderWidth="1px"
              borderRadius="md"
            >
              <Heading fontSize="xl">{job.title}</Heading>
              <Text mt={4}>{job.category}</Text>
            </Box>
          ))}
        </Stack>
      </VStack>
    </Container>
  );
};

export default Index;