import PageContainer from "@/components/PageContent";
import { NextPage } from "next";
import SignInPageContent from "@/components/SignInPage/SignInPageContent";

const SignInPage: NextPage = () => {
  return (
    <PageContainer>
      <SignInPageContent />
    </PageContainer>
  );
};

export default SignInPage;
