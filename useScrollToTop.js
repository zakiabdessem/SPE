import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

const useScrollToTop = () => {
  const router = useRouter();
  const path = usePathname();

  useEffect(() => {
    router.replace(path, undefined);

    window.scrollTo(0, 0);
  }, []);
};

export default useScrollToTop;
