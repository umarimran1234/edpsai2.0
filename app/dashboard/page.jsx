"use client";
import { BreadcrumbDemo } from "../../components/BreadCrums";
import Card from "../../components/Gridcard";
import { Input } from "../../components/ui/input";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

export default function Dashboard() {
  const [cards, setCards] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token') || document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    const userId = localStorage.getItem('_id');

    if (!token || !userId) {
      router.push('/login');
    } else {
      axios.get(`/api/getuser/${userId}`)
        .then((response) => {
          setUser(response.data);
          fetching(userId); // Fetch cards after user data is retrieved
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
          router.push("/login");
        });
    }
  }, [router]);

  const fetching = (userId) => {
    axios.get(`/api/getCard?userId=${userId}`)
      .then((response) => {
        setCards(response.data);
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((err) => {
        console.log(err);
        setLoading(false); // Set loading to false in case of error
      });
  };

  const handleCardClick = async (cardId) => {
    try {
      // Fetch saved progress for the card
      const response = await axios.get(`/api/Fetchprogress?cardId=${cardId}`);
      const { crunnentStep } = response.data;

      // Redirect based on saved progress
      if (crunnentStep) {
        router.push(`/${cardId}/${crunnentStep}`);
      } else {
        router.push(`/understanding/${cardId}`);
      }
    } catch (error) {
      console.error("Error fetching progress:", error);
      // Handle errors (e.g., show a message to the user)
      router.push(`/projects/${cardId}/firstSection`);
    }
  };

  return (
    <div className="marl lg:col-span-2 col-span-3">
      <BreadcrumbDemo firstpath='company' hreffirst='/' secondpath='EDPS Dashboard' hrefsecond='#' condition={false} />
      <div className="mt-12">
        <Input className="text-white welcome" disabled value={`Welcome back ${user ? user.name : ""}`} />
      </div>

      <div className="py-8">
        <div className="mb-5">
          <h5 style={{ fontWeight: 'bold' }}>Recent Projects</h5>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-1 w-50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {loading ? (
                // Display skeleton loader when data is loading
                Array(4).fill().map((_, index) => (
                  <div key={index} className="w-full">
                    <Skeleton height={200} baseColor="#202020" highlightColor="#444" />
                    <Skeleton count={3} baseColor="#202020" highlightColor="#444" />
                  </div>
                ))
              ) : (
                cards.map((card) => (
                  <Card
                    key={card._id}
                    imageSrc={card.imgUrl}
                    heading={card.ProjectName}
                    text={card.DescribProblem}
                    onClick={() => handleCardClick(card._id)} 
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
