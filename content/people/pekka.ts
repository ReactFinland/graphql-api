import { Contact, ContactType } from "../../server/schema/Contact";

const person: Contact = {
  name: "Pekka Enberg",
  about: `Pekka Enberg is a Co-Founder at ChiselStrike and a Ph.D. candidate at the University of Helsinki. Pekka is a veteran software engineer with two decades of experience spanning from backend development to database and operating system development. His research interests include distributed systems, databases, and operating systems. Pekka’s current research addresses the need for modern applications to take full advantage of hardware capabilities by eliminating the bottlenecks in operating system abstractions with the parakernel model.

Previously, Pekka has worked on the Linux kernel as a dynamic memory allocator maintainer and an individual contributor to Intel/AMD x86 and RISC-V architecture support, virtualization, filesystems, and more. Pekka attended the annual invite-only Linux kernel developer summit in 2009 and 2011. He also worked on the OSv unikernel, an operating system designed to run efficiently on the cloud, with results published at the USENIX ATC conference in 2014. After the OSv unikernel, Pekka worked at ScyllaDB developing an Apache Cassandra-compatible low-latency, high-throughput distributed database.`,
  image: {
    url: "people/pekka.jpeg",
  },
  social: {
    homepage: "https://penberg.org/",
    mastodon: "https://fosstodon.org/@penberg", // This has to be a whole link
    twitter: "penberg", // Handle without @ is enough
    github: "penberg",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "penberg",
    youtube: "",
    devto: "",
  },
  location: {
    country: {
      name: "Finland",
      code: "FI",
    },
    city: "Helsinki",
  },
  keywords: [],
  type: [ContactType.SPEAKER],
};

export default person;
