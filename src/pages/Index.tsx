
import { Navigation } from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import { Schedule } from "@/components/Schedule";
import { Instructor } from "@/components/Instructor";
import { Gallery } from "@/components/Gallery";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-float">
            Team Zest
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            하늘을 바라만 보고는 것이 아닌 하늘을 날아 보는 것은 어떠세요?
            팀 제스트가 실현 시켜 드리겠습니다.
          </p>
          <div className="mb-8 w-full max-w-3xl mx-auto">
            <iframe 
              width="100%" 
              height="315" 
              src="https://www.youtube.com/embed/unOutwB_puc?autoplay=1&mute=1" 
              title="Team Zest Acrobatic" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
          <Button size="lg" variant="default" className="text-lg">
            시작하기
          </Button>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">수업 시간표</h2>
          <Schedule />
        </div>
      </section>

      {/* Instructor Section */}
      <section id="instructor" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">강사 소개</h2>
          <Instructor />
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">시설 안내</h2>
          <Gallery />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            강남아크로바틱트릭킹팀제스트
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                서울강남 아크로바틱 마샬아츠 트릭킹 무용테크닉
              </h3>
              <p className="text-gray-600 mb-6">
                팀 제스트는 전문적인 아크로바틱과 마샬아츠 트릭킹 교육을 제공합니다.
                초보자부터 전문가까지, 각자의 수준에 맞는 맞춤형 교육으로
                여러분의 꿈을 실현시켜 드립니다.
              </p>
              <Button variant="outline">자세히 알아보기</Button>
            </div>
            <div className="aspect-video bg-gray-200 rounded-lg"></div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">프로그램</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "아크로바틱", desc: "기초부터 고급 기술까지" },
              { title: "마샬아츠", desc: "체계적인 무술 교육" },
              { title: "트릭킹", desc: "역동적인 동작 훈련" },
              { title: "무용테크닉", desc: "예술적 움직임 교육" },
            ].map((program) => (
              <div key={program.title} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                <p className="text-gray-600">{program.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">위치</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-square bg-gray-200 rounded-lg"></div>
            <div>
              <h3 className="text-2xl font-bold mb-4">찾아오시는 길</h3>
              <p className="text-gray-600 mb-6">
                서울특별시 강남구 논현동 49번지 선양빌딩 B1F
              </p>
              <p className="text-gray-600 mb-6">
                강남 논현역에서 7번출구로 나와 도보 30초로 직진하시면 오른쪽CU 편의점 건물 선양빌딩 지하1층 입니다. 
                강남 신사역에서 3번출구로 나와 도보 1분 직진하시면 왼쪽 CU편의점 건물 선양빌딩 지하1층 입니다. 
                신사역 버스정류장 바로 앞 맞은편 길 건너 CU편의점 건물 선양빌딩 지하1층 입니다.
              </p>
              <p className="text-gray-600 mb-6">
                주차정보: 무료 주차 12대 가능합니다.
              </p>
              <Button variant="default">
                길찾기
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-8">문의하기</h2>
          <p className="text-xl mb-8">
            팀 제스트와 함께 시작해보세요
          </p>
          <p className="text-xl mb-8">
            전화: 010-2034-9744 / 010-8345-1775
          </p>
          <p className="text-xl mb-8">
            이용시간: 매일 00:00 - 24:00
          </p>
          <Button variant="secondary" size="lg">
            상담 신청하기
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Team Zest</h3>
              <p className="text-gray-400 mb-4">
                강남아크로바틱&마샬아츠트릭킹
              </p>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/zest_tricking/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  Instagram
                </a>
                <a href="https://www.facebook.com/Minseok0802/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  Facebook
                </a>
                <a href="https://blog.naver.com/minseok0802" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  Blog
                </a>
              </div>
            </div>
            <div className="text-right">
              <h4 className="font-bold mb-2">연락처</h4>
              <p className="text-gray-400">전화: 010-2034-9744 / 010-8345-1775</p>
              <p className="text-gray-400">이용시간: 매일 00:00 - 24:00</p>
              <p className="text-gray-400">주소: 서울특별시 강남구 논현동 49번지 선양빌딩 B1F</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
