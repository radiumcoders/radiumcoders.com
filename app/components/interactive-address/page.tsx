import Container from "@/components/container"
import Address, {
  data,
} from "@/components/distribution-components/interactive-address"

function page() {
  const data: data = {
    name: "Jay Sharma",
    email: "radiumcoders@gmail.com",
    website: "radiumcoders.com",
    twitter: "@radiumcoders",
  }
  return (
    <Container className="flex min-h-svh items-center justify-center">
      <Address data={data} />
    </Container>
  )
}

export default page
