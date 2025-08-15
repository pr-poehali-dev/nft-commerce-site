import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Index = () => {
  const featuredNFTs = [
    {
      id: 1,
      title: "Cosmic Abstracts",
      price: "2.5 ETH",
      image: "/img/7fe400c6-12a0-48e7-9a08-1c22cabbf62c.jpg",
      artist: "CryptoArtist",
      likes: 234
    },
    {
      id: 2,
      title: "Ethereum Crystals",
      price: "1.8 ETH",
      image: "/img/8df30215-8388-43c0-b9ba-b280ef76dc3b.jpg",
      artist: "DigitalMaster",
      likes: 156
    },
    {
      id: 3,
      title: "Pixel Legends",
      price: "0.9 ETH",
      image: "/img/5654c04b-7ae2-463f-a09f-5ae4a9714db6.jpg",
      artist: "RetroCreator",
      likes: 89
    }
  ];

  const collections = [
    { name: "CryptoPunks", floor: "75.2 ETH", volume: "1,234 ETH", change: "+12.3%" },
    { name: "Bored Apes", floor: "42.1 ETH", volume: "987 ETH", change: "+8.7%" },
    { name: "Art Blocks", floor: "15.6 ETH", volume: "456 ETH", change: "-2.1%" }
  ];

  const activities = [
    { type: "sale", item: "Cosmic Abstract #1234", price: "2.5 ETH", time: "2 минуты назад" },
    { type: "bid", item: "Pixel Legend #567", price: "1.2 ETH", time: "5 минут назад" },
    { type: "listing", item: "Crystal Formation #89", price: "3.1 ETH", time: "8 минут назад" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="border-b border-border/40 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold nft-gradient bg-clip-text text-transparent">
                NFT MARKETPLACE
              </h1>
              <div className="hidden md:flex space-x-6">
                <Button variant="ghost" className="text-foreground/80 hover:text-foreground">
                  Главная
                </Button>
                <Button variant="ghost" className="text-foreground/80 hover:text-foreground">
                  Маркетплейс
                </Button>
                <Button variant="ghost" className="text-foreground/80 hover:text-foreground">
                  Коллекции
                </Button>
                <Button variant="ghost" className="text-foreground/80 hover:text-foreground">
                  Активность
                </Button>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="border-primary/20 hover:border-primary">
                <Icon name="Search" size={16} />
              </Button>
              <Button variant="outline" className="border-primary/20 hover:border-primary">
                <Icon name="User" size={16} />
                Профиль
              </Button>
              <Button className="nft-gradient hover:opacity-90">
                Создать NFT
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6 leading-tight">
            Откройте мир
            <span className="nft-gradient bg-clip-text text-transparent"> премиальных NFT</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Покупайте, продавайте и торгуйте уникальными цифровыми активами 
            на самом современном маркетплейсе NFT
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="nft-gradient hover:opacity-90 glow">
              <Icon name="Zap" size={20} />
              Исследовать
            </Button>
            <Button size="lg" variant="outline" className="border-primary/20 hover:border-primary">
              <Icon name="Plus" size={20} />
              Создать NFT
            </Button>
          </div>
        </div>
      </section>

      {/* Featured NFTs */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold">Популярные NFT</h2>
            <Button variant="outline" className="border-primary/20 hover:border-primary">
              Смотреть все
              <Icon name="ArrowRight" size={16} />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredNFTs.map((nft) => (
              <Card key={nft.id} className="hover-scale bg-card/50 backdrop-blur-sm border-border/40 overflow-hidden group">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={nft.image} 
                    alt={nft.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex justify-between items-start">
                    <span>{nft.title}</span>
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      <Icon name="Heart" size={12} />
                      {nft.likes}
                    </Badge>
                  </CardTitle>
                  <CardDescription>by {nft.artist}</CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between items-center pt-0">
                  <div className="text-lg font-semibold text-primary">{nft.price}</div>
                  <Button size="sm" className="nft-gradient hover:opacity-90">
                    Купить
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Collections & Activity */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <Tabs defaultValue="collections" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="collections">Топ коллекций</TabsTrigger>
              <TabsTrigger value="activity">Активность</TabsTrigger>
              <TabsTrigger value="stats">Статистика</TabsTrigger>
            </TabsList>
            
            <TabsContent value="collections">
              <div className="space-y-4">
                {collections.map((collection, index) => (
                  <Card key={collection.name} className="bg-card/50 backdrop-blur-sm border-border/40">
                    <CardContent className="flex items-center justify-between p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="font-semibold">{collection.name}</h3>
                          <p className="text-sm text-muted-foreground">Floor: {collection.floor}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">{collection.volume}</p>
                        <p className={`text-sm ${collection.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                          {collection.change}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="activity">
              <div className="space-y-4">
                {activities.map((activity, index) => (
                  <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/40">
                    <CardContent className="flex items-center justify-between p-6">
                      <div className="flex items-center space-x-4">
                        <div className={`w-3 h-3 rounded-full ${
                          activity.type === 'sale' ? 'bg-green-400' :
                          activity.type === 'bid' ? 'bg-blue-400' : 'bg-yellow-400'
                        }`} />
                        <div>
                          <p className="font-medium">{activity.item}</p>
                          <p className="text-sm text-muted-foreground">{activity.time}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-primary">{activity.price}</p>
                        <p className="text-sm text-muted-foreground capitalize">{activity.type}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="stats">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-card/50 backdrop-blur-sm border-border/40">
                  <CardHeader>
                    <CardTitle className="text-center">Общий объем</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-3xl font-bold text-primary">12,456 ETH</p>
                    <p className="text-sm text-green-400">+15.3% за 24ч</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 backdrop-blur-sm border-border/40">
                  <CardHeader>
                    <CardTitle className="text-center">Активные пользователи</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-3xl font-bold text-primary">45,123</p>
                    <p className="text-sm text-green-400">+8.7% за 24ч</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 backdrop-blur-sm border-border/40">
                  <CardHeader>
                    <CardTitle className="text-center">Всего NFT</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-3xl font-bold text-primary">156,789</p>
                    <p className="text-sm text-blue-400">+234 сегодня</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Часто задаваемые вопросы</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm border-border/40">
              <CardHeader>
                <CardTitle>Что такое NFT?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  NFT (Non-Fungible Token) — это уникальный цифровой актив, который нельзя заменить 
                  или дублировать. Каждый NFT имеет уникальную подпись в блокчейне.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur-sm border-border/40">
              <CardHeader>
                <CardTitle>Как купить NFT?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Для покупки NFT вам нужен криптокошелек с Ethereum. Подключите кошелек, 
                  выберите понравившийся NFT и нажмите "Купить".
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur-sm border-border/40">
              <CardHeader>
                <CardTitle>Как создать свой NFT?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Нажмите "Создать NFT", загрузите изображение, добавьте описание 
                  и установите цену. Ваш NFT будет размещен на маркетплейсе.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border/40">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4 nft-gradient bg-clip-text text-transparent">
                NFT MARKETPLACE
              </h3>
              <p className="text-muted-foreground">
                Премиальная платформа для торговли NFT
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Маркетплейс</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Исследовать</li>
                <li>Коллекции</li>
                <li>Рейтинги</li>
                <li>Активность</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Ресурсы</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Помощь</li>
                <li>Партнеры</li>
                <li>Блог</li>
                <li>API</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Сообщество</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Discord</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>Telegram</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/40 mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 NFT Marketplace. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;