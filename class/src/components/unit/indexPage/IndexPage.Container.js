import IndexPageUI from "./indexPage.Presenter";

export default function IndexPageLogic() {
  const router = useRouter();
  const { user, isAuthenticated } = useAuth();

  const onClickLogin = () => {
    router.push("/login");
  };

  return <IndexPageUI onClickLogin={onClickLogin} user={user}></IndexPageUI>;
}
