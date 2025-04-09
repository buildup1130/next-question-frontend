import dynamic from "next/dynamic";

const SocialSignUp = dynamic(
  () => import("@/components/unit/SocialSignUp/SocialSignUp.Container"),
  {
    ssr: false,
  }
);

export default function SocialSignUpPage() {
  return <SocialSignUp />;
}
