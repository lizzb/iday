  // friendlyName = The name to display in the interface
  // name = the csv/json-safe name for filtering etc

    var majors = [ 
      { friendlyName: 'Applied Math', name: 'am'},
      { friendlyName: 'Biomedical', name: 'bme'},
      { friendlyName: 'Chemical', name: 'chem'},
      { friendlyName: 'Civil', name: 'civil'},
      { friendlyName: 'Computer', name: 'ce'},
      { friendlyName: 'CompSci', name: 'cs'},
      { friendlyName: 'Electrical', name: 'ee'},
      { friendlyName: 'Environmental', name: 'enve'},
      { friendlyName: 'Industrial', name: 'ie'},
      { friendlyName: 'MaDE', name: 'made'},
      { friendlyName: 'Material Science', name:'matsci' },
      { friendlyName: 'Mechanical', name: 'mech' },
      { friendlyName: 'Non-engineering', name: 'noneng' }
    ];

    var positions = [ 
      { friendlyName: 'Full Time', name: 'fte'},
      { friendlyName: 'Intern', name: 'intern' },
      { friendlyName: 'Co-Op', name: 'coop' },
      { friendlyName: 'MS/PhD', name: 'msphd'}
    ];



var companies =  [
{"booth":1,"Room":"Louis","Floor":2,"nameId":"fenwal","name":"Fenwal Inc, a Fresenius-Kabi Company","am":null,"bme":1,"chem":null,"civil":null,"ce":1,"cs":1,"ee":null,"enve":null,"ie":null,"made":null,"matsci":null,"mech":1,"noneng":null,"msphd":null,"fte":1,"coop":1,"intern":1,"description":"Fenwal is a pioneer and global leader in the development of products that improve the safety and availability of blood. Our products help shape the practice of transfusion medicine, making life-saving blood therapies available to the medical professionals and patients worldwide who rely on them."},
{"booth":2,"Room":"Louis","Floor":2,"nameId":"carsdotcom","name":"Cars.com","am":null,"bme":null,"chem":null,"civil":null,"ce":1,"cs":1,"ee":null,"enve":null,"ie":null,"made":null,"matsci":null,"mech":null,"noneng":null,"msphd":null,"fte":null,"coop":null,"intern":1,"description":"Visited by more than 11 million car shoppers each month, Cars.com is the leading destination for online car shoppers, offering credible and easy-to-understand information from consumers and experts to help buyers formulate opinions on what to buy, where to buy and how much to pay for a car.\n With comprehensive pricing information, dealer reviews, side-by-side comparison tools, photo galleries, videos, unbiased editorial content and a large selection of new- and used-car inventory, Cars.com puts car buyers in control of their shopping process with the information they need to make confident buying decisions."},
{"booth":3,"Room":"Louis","Floor":2,"nameId":"fti","name":"FTI Consulting","am":null,"bme":null,"chem":null,"civil":null,"ce":null,"cs":null,"ee":null,"enve":null,"ie":null,"made":null,"matsci":null,"mech":null,"noneng":null,"msphd":null,"fte":1,"coop":null,"intern":1,"description":"Global organizations increasingly face complex challenges created by unpredictable financial markets, ever-changing governmental regulation and increasing global interdependencies. The enterprise value of each organization depends on how well these threats or opportunities are handled. But few have the capability or objective to manage them internally."},
{"booth":4,"Room":"Louis","Floor":2,"nameId":"bemis","name":"Bemis Company","am":null,"bme":1,"chem":1,"civil":null,"ce":null,"cs":null,"ee":1,"enve":null,"ie":null,"made":null,"matsci":1,"mech":1,"noneng":null,"msphd":null,"fte":1,"coop":1,"intern":null,"description":"Established in 1858 in St. Louis, Missouri, as a manufacturer of machine sewn cotton bags for milled food and grain products, Bemis has played an influential role in the packaging industry ever since its founding. Now a global supplier of flexible packaging and pressure sensitive label materials headquartered in Neenah, Wisconsin, Bemis serves customers worldwide and produces packaging for products found in virtually every aisle of the grocery store. "},
{"booth":5,"Room":"Louis","Floor":2,"nameId":"epic","name":"Epic","am":1,"bme":1,"chem":1,"civil":1,"ce":1,"cs":1,"ee":1,"enve":1,"ie":1,"made":1,"matsci":1,"mech":1,"noneng":1,"msphd":null,"fte":1,"coop":null,"intern":null,"description":"Epic makes software for mid-size and large medical groups, hospitals and integrated healthcare organizations _ working with customers that include community hospitals, academic facilities, children's organizations, safety net providers and multi-hospital systems. Our integrated software spans clinical, access and revenue functions and extends into the home."},
{"booth":6,"Room":"Louis","Floor":2,"nameId":"mathworks","name":"MathWorks","am":null,"bme":null,"chem":null,"civil":null,"ce":1,"cs":1,"ee":1,"enve":null,"ie":null,"made":null,"matsci":null,"mech":1,"noneng":null,"msphd":1,"fte":1,"coop":1,"intern":1,"description":"MathWorks is the leading developer of mathematical computing software. Engineers and scientists worldwide rely on its products to accelerate the pace of discovery, innovation, and development."},
{"booth":7,"Room":"Louis","Floor":2,"nameId":"boeing","name":"Boeing Company","am":null,"bme":null,"chem":1,"civil":1,"ce":1,"cs":1,"ee":1,"enve":null,"ie":1,"made":1,"matsci":1,"mech":1,"noneng":1,"msphd":null,"fte":1,"coop":null,"intern":1,"description":"Boeing is the world's leading aerospace company and the largest manufacturer of commercial jetliners and military aircraft combined. Additionally, Boeing designs and manufactures rotorcraft, electronic and defense systems, missiles, satellites, launch vehicles and advanced information and communication systems. As a major service provider to NASA, Boeing is the prime contractor for the International Space Station. The company also provides numerous military and commercial airline support services. Boeing provides products and support services to customers in 150 countries and is one of the largest U.S. exporters in terms of sales."},
{"booth":8,"Room":"Louis","Floor":2,"nameId":"kiewit","name":"Kiewit","am":null,"bme":null,"chem":null,"civil":1,"ce":null,"cs":null,"ee":null,"enve":null,"ie":null,"made":null,"matsci":null,"mech":null,"noneng":null,"msphd":1,"fte":1,"coop":1,"intern":1,"description":"Excellence. It is the foundation of everything we do. What began in 1884 with two hardworking brothers has grown into a Fortune 500 construction, mining and engineering powerhouse.\n Kiewits ethical, forward-thinking workforce continues to build upon the companys reputation of safe, high-quality engineering. As an employee-owned company, Kiewits assets are managed by the people who know our work best. For us, business is personal. As our own stakeholders, we are invested in every project we take on. We continuously strive to build high-quality work at the lowest cost."},
{"booth":9,"Room":"Louis","Floor":2,"nameId":"alcatel-lucent","name":"Alcatel-Lucent","am":null,"bme":null,"chem":null,"civil":null,"ce":1,"cs":1,"ee":1,"enve":null,"ie":null,"made":null,"matsci":null,"mech":null,"noneng":null,"msphd":1,"fte":1,"coop":1,"intern":1,"description":"Alcatel-Lucent is at the forefront of global communications. We provide products and innovations in IP and cloud networking, as well as ultra-broadband fixed and wireless access. We serve service providers and their customers, as well as enterprises and institutions throughout the world. Alcatel-Lucent's Bell Labs, one of the worlds foremost technology research institutes, is responsible for countless breakthroughs that have shaped the networking and communications industry. "},
{"booth":10,"Room":"Louis","Floor":2,"nameId":"imc","name":"IMC Financial Markets","am":1,"bme":null,"chem":null,"civil":null,"ce":1,"cs":1,"ee":1,"enve":null,"ie":null,"made":null,"matsci":null,"mech":null,"noneng":null,"msphd":null,"fte":1,"coop":null,"intern":1,"description":"IMC financial markets is one of the worlds leading proprietary trading firms and a key market maker in various products listed on exchanges throughout the world.\n In general, our main strategies can be grouped into: Market Making or liquidity providing,  Algorithmic arbitrage,  Statistical arbitrage \n \n All of our strategies are proprietary and within IMC financial markets we do not have any external clients. All of our strategies have a short-term focus and are considered as ´high frequency trading. "},
{"booth":11,"Room":"Louis","Floor":2,"nameId":"mwrdgc","name":"Metropolitan Water Reclamation District of Greater Chicago","am":null,"bme":null,"chem":1,"civil":1,"ce":null,"cs":null,"ee":1,"enve":null,"ie":null,"made":null,"matsci":null,"mech":1,"noneng":null,"msphd":null,"fte":1,"coop":null,"intern":null,"description":"The District will protect the health and safety of the public in its service area, protect the quality of the water supply source (Lake Michigan), improve the quality of water in watercourses in its service area, protect businesses and homes from flood damages, and manage water as a vital resource for its service area. The Districts service area is 883.5 square miles of Cook County, Illinois. The District is committed to achieving the highest standards of excellence in fulfilling its mission. "},
{"booth":12,"Room":"Louis","Floor":2,"nameId":"cme-group","name":"CME Group","am":null,"bme":null,"chem":null,"civil":null,"ce":1,"cs":1,"ee":null,"enve":null,"ie":null,"made":null,"matsci":null,"mech":null,"noneng":null,"msphd":null,"fte":1,"coop":null,"intern":null,"description":"As the world's leading and most diverse derivatives marketplace, CME Group is where the world comes to manage risk. We offer the widest range of global benchmark products across all major asset classes. Helping businesses everywhere mitigate the myriad risks they face in todays uncertain global economy allows them to operate more effectively, create more jobs, and pass benefits on to consumers."},
{"booth":13,"Room":"Louis","Floor":2,"nameId":"pratt-whitney","name":"Pratt & Whitney","am":null,"bme":null,"chem":null,"civil":null,"ce":null,"cs":null,"ee":null,"enve":null,"ie":null,"made":1,"matsci":1,"mech":1,"noneng":null,"msphd":null,"fte":1,"coop":null,"intern":null,"description":"Pratt & Whitney, a United Technologies Corp. company (NYSE:UTX), is a world leader in the design, manufacture and service of aircraft engines, auxiliary and ground power units, and small turbojet propulsion products. Today, Pratt & Whitney develops game-changing technologies for the future, such as the PurePowerŒ PW1000G engine, with patented Geared Turbofan engine technology. The company's worldwide large commercial engine maintenance, repair and overhaul network provides innovative services that add value and delight customers around the globe."},
{"booth":14,"Room":"Louis","Floor":2,"nameId":"gtl","name":"GTL/Illinois River Energy","am":null,"bme":null,"chem":1,"civil":null,"ce":null,"cs":null,"ee":null,"enve":null,"ie":null,"made":null,"matsci":null,"mech":null,"noneng":null,"msphd":null,"fte":null,"coop":1,"intern":1,"description":"Illinois River Energy, LLC (IRE), owned by GTL Resources USA, Inc., operates a dry mill, corn-based bio-refinery which produces fuel grade ethanol, wet and dry distillers grains (ddgs), and Inedible corn oil that is utilized in the production of biodiesel and the animal feed market. The plant is located in Rochelle, Illinois where it processes over 40 million bushels of corn each year. The facility annually produces over 120 million gallons of denatured fuel grade renewable ethanol, over 300,000 tons of distillers grains and over 24 million pounds of Inedible corn oil.\n \n IRE is located on an 81 acre industrial site, southeast of Rochelle, IL at 1900 Steward Road. The facility has a positive economic impact within Rochelle and the surrounding communities. Corn is secured locally direct from farmers and through various elevators in the region."},
{"booth":15,"Room":"Louis","Floor":2,"nameId":"pwc","name":"PwC (PricewaterhouseCoopers)","am":1,"bme":1,"chem":null,"civil":null,"ce":1,"cs":1,"ee":1,"enve":null,"ie":1,"made":1,"matsci":null,"mech":1,"noneng":1,"msphd":1,"fte":1,"coop":null,"intern":1,"description":"Imagine the power of 180,000 people with a common purpose Ü building relationships that create value for you and your business. This is PwC. Every day, our people work with you to build the value you are looking for.\n We bring a global perspective along with in-depth knowledge of local, state and US issues. In 1998, Price Waterhouse and Coopers & Lybrand merged to create PricewaterhouseCoopers. We have a long history of delivering value-added professional services to our clients. Our accounting practice originated in London during the mid-1800's."},
{"booth":16,"Room":"Louis","Floor":2,"nameId":"itw","name":"ITW","am":null,"bme":null,"chem":null,"civil":null,"ce":1,"cs":1,"ee":1,"enve":null,"ie":null,"made":1,"matsci":null,"mech":1,"noneng":1,"msphd":null,"fte":1,"coop":null,"intern":1,"description":"Since our founding more than 100 years ago, ITW has become one of the worlds leading diversified manufacturers of specialized industrial equipment, consumables, and related service businesses. ITW businesses serve local customers and markets around the globe, with a significant presence in developed as well as emerging markets. "},
{"booth":17,"Room":"Louis","Floor":2,"nameId":"trading-tech","name":"Trading Technologies","am":null,"bme":null,"chem":null,"civil":null,"ce":null,"cs":1,"ee":null,"enve":null,"ie":null,"made":null,"matsci":null,"mech":null,"noneng":null,"msphd":null,"fte":1,"coop":1,"intern":1,"description":"We distribute our software and solutions to end users through more than 100 firms, including 19 of the top 20 U.S. futures brokers. We're proud to have the world's premier investment banks, brokers, Futures Commission Merchants (FCMs), hedge funds, proprietary trading firms and other trading institutions as our customers.\n Our customers tell us they trust TT to help them succeed in the often turbulent world of trading because of our technology, our people and our ongoing drive to innovate. We can anticipate and deliver the innovations that traders need in large part because we are intimately familiar with what they do. "},
{"booth":18,"Room":"Louis","Floor":2,"nameId":"sbb","name":"SBB Research Group","am":null,"bme":null,"chem":null,"civil":null,"ce":1,"cs":1,"ee":null,"enve":null,"ie":null,"made":null,"matsci":null,"mech":null,"noneng":null,"msphd":1,"fte":1,"coop":1,"intern":1,"description":"SBB Research Group is an early-stage investment management and research firm utilizing sophisticated and responsible strategies to manage assets totaling more than $100 million. While protecting principal and reducing portfolio volatility, we apply tested techniques to ensure our investments are maximizing their potential. The culture at SBB Research Group fosters intense collaboration between metrics-driven individuals from diverse engineering and research backgrounds. Team members share topical expertise while engaging in independent research and continuous professional development. Our team of engineers implements and refines concepts, often inspired by academic communities, into full-fledged algorithmic models."},
{"booth":19,"Room":"Louis","Floor":2,"nameId":"outerwall","name":"Outerwall/Redbox","am":null,"bme":null,"chem":null,"civil":null,"ce":1,"cs":1,"ee":null,"enve":null,"ie":null,"made":null,"matsci":null,"mech":null,"noneng":null,"msphd":null,"fte":1,"coop":null,"intern":null,"description":"As the company behind well-loved brands like RedboxŒ and CoinstarŒ and the leader in automated retail, we're on a mission to create a better everyday. We transform empty spaces into exciting retail solutions that make life easier and less complicated for consumers Ü and more profitable for retailers. Powered by proven technologies and practices Ü and a great instinct about people Üwe're revolutionizing the way people shop and do business with a growing portfolio of products and services. "},
{"booth":20,"Room":"Louis","Floor":2,"nameId":"com-ed","name":"ComEd","am":null,"bme":null,"chem":null,"civil":null,"ce":null,"cs":null,"ee":1,"enve":null,"ie":null,"made":null,"matsci":null,"mech":1,"noneng":1,"msphd":null,"fte":null,"coop":null,"intern":1,"description":"Commonwealth Edison Company, perhaps better known as ComEd, is a unit of Chicago-based Exelon Corporation. Exelon is one of the nation's largest electric utilities, with approximately 5.4 million customers. ComEd provides service to approximately 3.8 million customers across Northern Illinois, or 70 percent of the state's population.\n ComEd is an energy delivery company. We do not own power plants and we do not make electricity. We deliver electricity to your home or business. To do this, we manage more than 90,000 miles of powerlines in an 11,400-square-mile territory. Since 2001, we have invested more than $5 billion in our electrical transmission and distributions system to continue to provide customers like you with the quality service you expect and deserve."},
{"booth":21,"Room":"Louis","Floor":2,"nameId":"chopper-trading","name":"Chopper Trading","am":1,"bme":null,"chem":null,"civil":null,"ce":1,"cs":1,"ee":1,"enve":null,"ie":null,"made":null,"matsci":null,"mech":null,"noneng":null,"msphd":1,"fte":1,"coop":null,"intern":null,"description":"Chopper Trading is a technology-based proprietary trading firm that operates in a range of global markets and trades on several major exchanges. Founded in 2002, Chopper Trading is headquartered in Chicago and currently has offices in New York, London and Washington, D.C., among other locations."},
{"booth":22,"Room":"Louis","Floor":2,"nameId":"citadel","name":"Citadel LLC","am":1,"bme":null,"chem":null,"civil":null,"ce":1,"cs":1,"ee":1,"enve":null,"ie":null,"made":null,"matsci":null,"mech":null,"noneng":null,"msphd":1,"fte":1,"coop":null,"intern":1,"description":"Across Citadel Asset Management and Citadel Securities, we are a leader in the worlds major markets. From innovative asset management strategies to market_making in options and equities, Citadel effectively deploys capital to convert opportunity into results. In every business relationship, Citadel strives to be a trusted partner. We move to wherever opportunity exists, bringing our clients and partners with us."},
{"booth":23,"Room":"Louis","Floor":2,"nameId":"clarity","name":"Clarity Solutions Group","am":1,"bme":null,"chem":null,"civil":null,"ce":1,"cs":1,"ee":1,"enve":null,"ie":1,"made":null,"matsci":null,"mech":1,"noneng":1,"msphd":null,"fte":1,"coop":null,"intern":null,"description":"Clarity is a data and analytics firm providing expert consulting solutions and ongoing support with an uncompromising focus on client success. Our clients trust us to produce innovative, value-driven solutions that leverage existing investments to quickly generate results. Our elite team of passionate professionals works with clients in a variety of industries throughout North America, transforming the way businesses think about, organize and use their data.\n \n We offer the enterprise-level expertise of a systems integrator, the client-centric focus of a boutique data services provider, and the strategic business experience of a top-tier management consulting firm. Our two subsidiaries extend and augment those offerings. Clarity Resource Group provides expert staffing solutions whether they are short-term or contract-to-hire. Clarity Operations provides a full-suite of managed services offering ensuring our clients have ongoing support for their data and analytics solutions."},
{"booth":24,"Room":"Louis","Floor":2,"nameId":"yahoo","name":"Yahoo!","am":null,"bme":null,"chem":null,"civil":null,"ce":1,"cs":1,"ee":null,"enve":null,"ie":null,"made":null,"matsci":null,"mech":null,"noneng":null,"msphd":1,"fte":1,"coop":null,"intern":1,"description":"Yahoo is the world's largest start-up, which means that we move fast and always let our users lead the way. Founded in 1994 by two Stanford PhD candidates, we've grown into a company that helps you find what you're looking for on any Internet-connected device. Our employees are rewarded for curiosity and we celebrate explorers, relying on our passionate and transformative talent to do what's right for our users.\n As a leader in global daily habits like email, entertainment, news and sports, we strive to inspire, delight and entertain. By infusing our products with beauty and personality driven by our users, every Yahoo experience feels made to order."},
{"booth":25,"Room":"Louis","Floor":2,"nameId":"gdeb","name":"General Dynamics Electric Boat","am":null,"bme":null,"chem":null,"civil":1,"ce":1,"cs":1,"ee":1,"enve":null,"ie":null,"made":null,"matsci":null,"mech":1,"noneng":null,"msphd":1,"fte":1,"coop":null,"intern":null,"description":"Electric Boat has a distinguished history, tracing its roots to February 7th, 1899, when the company was established to complete a vessel that would revolutionize naval warfare. Named Holland for its inventor, the visionary Irishman John Phillip Holland, this 54-foot vessel in 1900 became the first commissioned U.S. Navy submarine. Since then, the Hollands successors have been employed to radically reshape naval warfare and maritime strategy, while contributing to the successful outcome of World War II and play an indispensable role in the countrys Cold War victory."},
{"booth":26,"Room":"Louis","Floor":2,"nameId":"wolverine-trading","name":"Wolverine Trading, LLC","am":null,"bme":null,"chem":null,"civil":null,"ce":1,"cs":1,"ee":null,"enve":null,"ie":null,"made":null,"matsci":null,"mech":null,"noneng":1,"msphd":null,"fte":1,"coop":null,"intern":1,"description":"Wolverine is a diversified financial institution specializing in proprietary trading, asset management, order execution services, and technology solutions. We are recognized as a market leader in derivatives valuation, trading, and value-added order execution across global equity, options, and futures markets. Our focus on innovation, achievement, and integrity serves the interests of our clients and colleagues. Wolverine is headquartered in Chicago, with branch offices in New York, San Francisco, and London."},
{"booth":27,"Room":"Louis","Floor":2,"nameId":"mta","name":"Metro North Railroad","am":null,"bme":null,"chem":null,"civil":1,"ce":1,"cs":null,"ee":1,"enve":1,"ie":null,"made":null,"matsci":null,"mech":1,"noneng":null,"msphd":null,"fte":1,"coop":null,"intern":null,"description":"The Metropolitan Transportation Authority is North America's largest transportation network, serving a population of 15.1 million people in the 5,000-square-mile area fanning out from New York City through Long Island, southeastern New York State, and Connecticut. The MTA is continuing its rebuilding and improvement efforts through the 2010-2014 Capital Program and has committed significant resources to the first substantial expansion of the network in 60 years, including Long Island Rail Road access to Grand Central, the uptown segment of a full-length Second Avenue subway, and the extension of the number 7 line west from Times Square to the Javits Center."},
{"booth":28,"Room":"Louis","Floor":2,"nameId":"mbhb-llc","name":"McDonnell Boehnen Hulbert & Berghoff LLP","am":null,"bme":null,"chem":null,"civil":null,"ce":1,"cs":1,"ee":1,"enve":null,"ie":null,"made":null,"matsci":null,"mech":1,"noneng":null,"msphd":1,"fte":1,"coop":null,"intern":null,"description":"At McDonnell Boehnen Hulbert & Berghoff LLP (\"MBHB\"), we provide creative, pragmatic business solutions through a variety of intellectual property services, including litigation, prosecution, and general client counseling.\n MBHBs practice areas encompass all aspects of intellectual property law. We have practical experience in a myriad of technology areas. Our attorneys are experienced in the procurement, licensing, enforcement, and defense of patents, trademarks, copyrights, trade secrets, and unfair competition actions in a number of technological disciplines and product categories including biotechnology, business methods, chemical, electrical, mechanical and materials, pharmaceuticals and diagnostics, software and telecommunications."},
{"booth":29,"Room":"Louis","Floor":2,"nameId":"think-big","name":"Think Big Analytics","am":null,"bme":null,"chem":null,"civil":null,"ce":null,"cs":1,"ee":null,"enve":null,"ie":null,"made":null,"matsci":null,"mech":null,"noneng":null,"msphd":null,"fte":1,"coop":null,"intern":1,"description":"Companies are transforming their businesses by leveraging the power of Big Data. To move beyond traditional business intelligence to true Analytics requires a Big Data roadmap, skills training, and deep data science & engineering expertise. Think Big's technology-enabled services include proven solutions that navigate organizations through the five essential stages of adoption."},
{"booth":30,"Room":"Louis","Floor":2,"nameId":"here-nokia","name":"HERE, a Nokia Business","am":null,"bme":null,"chem":null,"civil":null,"ce":1,"cs":1,"ee":null,"enve":null,"ie":null,"made":null,"matsci":null,"mech":null,"noneng":null,"msphd":1,"fte":1,"coop":null,"intern":1,"description":"Nokias mission is simple: Connecting People. Our goal is to build great mobile products that enable billions of people worldwide to enjoy more of what life has to offer. Our challenge is to achieve this in an increasingly dynamic and competitive environment.\n Ideas. Energy. Excitement. Opportunities. In today's mobile world, it feels like anything is possible - and that's what inspires us to get out of bed every day."},
{"booth":31,"Room":"Louis","Floor":2,"nameId":"etherios","name":"Etherios, a Division of Digi International","am":null,"bme":null,"chem":null,"civil":null,"ce":1,"cs":1,"ee":1,"enve":null,"ie":null,"made":null,"matsci":null,"mech":null,"noneng":null,"msphd":null,"fte":1,"coop":null,"intern":1,"description":"At Etherios, our mission is to deliver industry leading cloud-based solutions. We love what we do. Etherios is comprised of passionate and driven individuals that are focused on delivering innovative solutions and customer success for our clients. We were born in the cloud. We work with organizations of all sizes and across a diverse range of industries to deliver best-in-class cloud based products and services. Our capabilities encompass advisory, salesforce.com, wireless design and M2M consulting services. Our combined product and services offering uniquely position us to be your end-to-end M2M cloud solution expert."},
{"booth":32,"Room":"Louis","Floor":2,"nameId":"lend-lease","name":"Lend Lease ","am":null,"bme":null,"chem":null,"civil":1,"ce":null,"cs":null,"ee":null,"enve":null,"ie":null,"made":null,"matsci":null,"mech":null,"noneng":null,"msphd":null,"fte":1,"coop":null,"intern":1,"description":"Over 50 years of experience has taken us across the globe from Australia to Asia, Europe and the Americas. We employ more than 18,000 people around the world and manage an extensive portfolio of assets. Were proud to say that over a million people around the world live, work, shop or are connected through an asset we have created, every single day.  \n  Our clients, partners and investors can choose to leverage our strengths and local expertise at any stage of the property and infrastructure spectrum _ from development, investment management, project management & construction, and asset & property management _ or partner with us right through the complete journey. "},
{"booth":33,"Room":"Louis","Floor":2,"nameId":"schneider-electric","name":"Schneider Electric","am":null,"bme":null,"chem":null,"civil":null,"ce":1,"cs":1,"ee":1,"enve":null,"ie":1,"made":1,"matsci":null,"mech":1,"noneng":1,"msphd":null,"fte":1,"coop":1,"intern":1,"description":"Helping people make the most of their energy\n Have you ever dreamed of improving your bottom line while consuming less energy and without a power outage? We can help you solve this problem with solutions to make energy safe, reliable, efficient, productive and green from plant to plug. \n \n Beyond business solutions, we cover all the aspects of sustainable development: society, governance and environment. And because you cannot manage what you cannot measure, we follow our improvements with a unique tool: the Planet & Society barometer."},
{"booth":34,"Room":"Louis","Floor":2,"nameId":"zebra-tech","name":"Zebra Technologies Corporation","am":null,"bme":null,"chem":1,"civil":null,"ce":1,"cs":1,"ee":1,"enve":null,"ie":null,"made":null,"matsci":null,"mech":1,"noneng":1,"msphd":null,"fte":1,"coop":1,"intern":1,"description":"A global leader respected for innovation and reliability, Zebra provides enabling technologies that allow customers to take smarter actions.\n Zebra's extensive portfolio of barcode, receipt, kiosk and RFID printers and supplies, as well as real-time location solutions give a digital voice to assets, people and transactions that provides greater visibility into mission-critical information."},
{"booth":35,"Room":"Louis","Floor":2,"nameId":"ucc","name":"United Conveyor Corporation","am":null,"bme":null,"chem":1,"civil":null,"ce":null,"cs":null,"ee":1,"enve":null,"ie":null,"made":null,"matsci":null,"mech":1,"noneng":null,"msphd":null,"fte":1,"coop":null,"intern":null,"description":"United Conveyor Corporation (UCC) is a global leader in ash handling solutions for the power generation industry and a preferred supplier for dry sorbent injection and reagent handling.\n Since 1920, UCC has pioneered material handling technology and has led the way in helping to improve plant performance. UCC has devoted its efforts exclusively to the design, supply, installation and maintenance of ash handling and other abrasive material handling systems. "},
{"booth":36,"Room":"Louis","Floor":2,"nameId":"northwestern-mutual","name":"Northwestern Mutual","am":null,"bme":null,"chem":null,"civil":null,"ce":1,"cs":1,"ee":null,"enve":null,"ie":null,"made":null,"matsci":null,"mech":null,"noneng":1,"msphd":null,"fte":null,"coop":null,"intern":1,"description":"We are well-positioned to help you manage financial risk and achieve financial security in today's complex world. People are the power behind Northwestern Mutual, and diversity makes us better. We are committed to reflecting and serving the marketplace. We will do so by attracting and enhancing the engagement of those who bring their unique perspectives, ideas, and beliefs. At Northwestern Mutual, people matter. Learn more about our commitment by reading our Diversity and Inclusion brochure and watching this video."},
{"booth":37,"Room":"Louis","Floor":2,"nameId":"idot","name":"Illinois Dept. of Transportaion","am":null,"bme":null,"chem":null,"civil":1,"ce":null,"cs":null,"ee":null,"enve":null,"ie":null,"made":null,"matsci":null,"mech":null,"noneng":null,"msphd":null,"fte":1,"coop":null,"intern":null,"description":"The mission of IDOT is to provide safe, cost-effective transportation for Illinois in ways that enhance quality of life, promote economic prosperity, and demonstrate respect for our environment. We will accomplish our mission while making the following principles the hallmark of all our work: Safety, Integrity, Diversity, Responsiveness, Quality, Innovation. The vision of IDOT is to be recognized as the premier state department of transportation in the nation."},
{"booth":38,"Room":"Louis","Floor":2,"nameId":"pariveda","name":"Pariveda Solutions","am":1,"bme":null,"chem":null,"civil":null,"ce":1,"cs":1,"ee":null,"enve":null,"ie":null,"made":null,"matsci":null,"mech":null,"noneng":null,"msphd":null,"fte":1,"coop":null,"intern":null,"description":"Our mission is to develop, manage and apply talent for the benefit of clients, in partnership and for profit. People are most likely to achieve their full potential working in a business model specifically designed to help the most people reach their aspirational career goals as quickly as possible. Our five core values permeate everything we do. When we make a decision, we do it based on how well each choice conforms to these values. Integrity, Partnership , Servant Leadership , Excellence , Profit."},
{"booth":39,"Room":"Louis","Floor":2,"nameId":"continental","name":"Continental Corporation","am":null,"bme":null,"chem":null,"civil":null,"ce":1,"cs":1,"ee":1,"enve":null,"ie":null,"made":null,"matsci":null,"mech":1,"noneng":null,"msphd":null,"fte":1,"coop":null,"intern":1,"description":"We are conscientious people who help others around the world fulfill their dreams of mobility. This also comprises the transport of persons, materials and information. We are aware that mobility and transport are fundamental to life, and want to help meet the high expectations in this regard.\n As a responsible, leading company and the partner of choice, we invent, develop, produce and market indispensable technological solutions that shape in particular the four mega trends, including safety, environment, information and affordable cars."},
{"booth":40,"Room":"Louis","Floor":2,"nameId":"zs-associates","name":"ZS Associates","am":1,"bme":1,"chem":1,"civil":1,"ce":1,"cs":1,"ee":1,"enve":1,"ie":1,"made":1,"matsci":1,"mech":1,"noneng":null,"msphd":1,"fte":1,"coop":null,"intern":1,"description":"ZS Associates is one of the world's largest business services firms specializing in transforming sales and marketing from an art to a science. We help clients gain market share at lower cost. We do so by creating data-driven strategies that they can implement rapidly and by taking on sales and marketing operations to make them more competitive. \n With 20 offices around the world, we have worked with more than 700 companies in 70 countries across consumer products, energy, high-tech, insurance, medical products and services, pharmaceuticals and other industries."},
{"booth":41,"Room":"Louis","Floor":2,"nameId":"ida","name":"Institute for Defense Analysis","am":1,"bme":null,"chem":1,"civil":null,"ce":1,"cs":1,"ee":1,"enve":1,"ie":null,"made":null,"matsci":1,"mech":1,"noneng":1,"msphd":null,"fte":1,"coop":null,"intern":1,"description":""},
{"booth":42,"Room":"Louis","Floor":2,"nameId":"factset","name":"FactSet Research Systems","am":null,"bme":null,"chem":null,"civil":null,"ce":1,"cs":1,"ee":null,"enve":null,"ie":null,"made":null,"matsci":null,"mech":null,"noneng":1,"msphd":null,"fte":1,"coop":null,"intern":1,"description":"FactSet consolidates all the tools you need to monitor global markets, public and private companies, and equity and fixed income portfolios in a single, intuitive interface.\n With FactSet, you gain powerful analytics tailored to your workflow, the broadest scope of data available, and access to industry-leading client service. Our solutions are designed to fit seamlessly into your workflow, with a wide selection of customizable reports and charts that are relevant to your job function"},
{"booth":43,"Room":"Louis","Floor":2,"nameId":"altec","name":"Altec Inc.","am":null,"bme":null,"chem":null,"civil":null,"ce":null,"cs":1,"ee":1,"enve":null,"ie":1,"made":1,"matsci":1,"mech":1,"noneng":1,"msphd":null,"fte":1,"coop":1,"intern":1,"description":"Altec is a leading provider of products and services to the electric utility, telecommunications, tree care, lights and signs, and contractor markets. We deliver products and services in more than 100 countries throughout the world. Altec, Inc. is the holding company for Altec Industries, Global Rental, Altec NUECO, Altec Worldwide, Altec Capital, Altec Supply, and Altec Ventures, LLC."},
{"booth":44,"Room":"Louis","Floor":2,"nameId":"chrylser-group","name":"Chrylser Group LLC","am":null,"bme":null,"chem":1,"civil":null,"ce":null,"cs":1,"ee":1,"enve":null,"ie":null,"made":null,"matsci":1,"mech":1,"noneng":null,"msphd":null,"fte":null,"coop":null,"intern":1,"description":"Chrysler Group LLC, formed in 2009 to establish a global strategic alliance with Fiat S.p.A., produces Chrysler, Jeep, Dodge, Ram, SRT, FIAT and Mopar vehicles and products. With the resources, technology and worldwide distribution network required to compete on a global scale, the alliance builds on Chrysler Groups culture of innovation, first established by Walter P. Chrysler in 1925, and Fiats complementary technology that dates back to its_ founding in 1899."},
{"booth":45,"Room":"Louis","Floor":2,"nameId":"adage-tech","name":"Adage Technologies","am":null,"bme":null,"chem":null,"civil":null,"ce":1,"cs":1,"ee":null,"enve":null,"ie":null,"made":null,"matsci":null,"mech":null,"noneng":1,"msphd":1,"fte":1,"coop":1,"intern":1,"description":"Adage Technologies, an award-winning Chicago web development firm, specializes in creating engaging custom websites, custom software and mobile solutions since its inception in 2001."},
{"booth":46,"Room":"Louis","Floor":2,"nameId":"denso","name":"DENSO International America","am":null,"bme":null,"chem":null,"civil":null,"ce":1,"cs":null,"ee":1,"enve":null,"ie":null,"made":null,"matsci":null,"mech":1,"noneng":1,"msphd":1,"fte":1,"coop":1,"intern":1,"description":"DENSO is a global automotive supplier of advanced automotive technology, systems and components, heading toward an automotive society where cars put less drag on the environment and drivers have fewer worries about traffic accidents.\n DENSO's lead in developing this automotive society comes from anticipating the needs of automakers and closely partnering with customers right from the start.\n \n Our teams work quickly and diligently to manufacture products that show a commitment to safety and the environment, while at the same time punch up the level of driving comfort and convenience."},
{"booth":47,"Room":"Louis","Floor":2,"nameId":"environ","name":"ENVIRON International Corp","am":null,"bme":null,"chem":1,"civil":1,"ce":null,"cs":null,"ee":null,"enve":1,"ie":null,"made":null,"matsci":null,"mech":null,"noneng":null,"msphd":null,"fte":1,"coop":null,"intern":1,"description":"Since 1982, ENVIRON has worked with clients around the world to help resolve their most demanding environmental and human health issues. We combine resources across geographic boundaries and technical and scientific disciplines to provide clients with the best, most responsive teamsÜwhether responding to existing challenges, evaluating opportunities to improve performance or seeking to reduce future liabilities. Clients benefit from our unique ability to bring clarity to issues at the intersection of science, business and policy."},
{"booth":48,"Room":"Louis","Floor":2,"nameId":"ama","name":"American Medical Association","am":null,"bme":null,"chem":null,"civil":null,"ce":1,"cs":1,"ee":null,"enve":null,"ie":null,"made":null,"matsci":null,"mech":null,"noneng":null,"msphd":null,"fte":null,"coop":null,"intern":1,"description":"As the nation's health care system continues to evolve, the AMA is dedicated to ensuring sustainable physician practices that result in better health outcomes for patients. This work is captured in the AMA's five-year strategic plan, which aims to ensure that enhancements to health care in the United States are physician-led, advance the physician-patient relationship, and ensure that health care costs can be prudently managed."},
{"booth":49,"Room":"Louis","Floor":2,"nameId":"wrigley","name":"Wm Wrigley Jr Company","am":null,"bme":null,"chem":null,"civil":null,"ce":null,"cs":null,"ee":null,"enve":null,"ie":null,"made":null,"matsci":null,"mech":1,"noneng":null,"msphd":null,"fte":null,"coop":1,"intern":null,"description":"Wrigley is a recognized leader in confections with a wide range of product offerings including gum, mints, hard and chewy candies, and lollipops. Wrigley's world-famous brands _ including ExtraŒ, OrbitŒ, DoublemintŒ, and 5Ž chewing gums, as well as confectionery brands SkittlesŒ, StarburstŒ, AltoidsŒ and Life SaversŒ _ create simple pleasures for consumers every day. With operations in approximately 50 countries and distribution in more than 180 countries, Wrigley's brands bring smiles to faces around the globe. "},
{"booth":50,"Room":"Louis","Floor":2,"nameId":"sapient-nitro","name":"SapientNitro","am":null,"bme":null,"chem":null,"civil":null,"ce":1,"cs":1,"ee":null,"enve":null,"ie":1,"made":null,"matsci":null,"mech":null,"noneng":1,"msphd":null,"fte":1,"coop":null,"intern":null,"description":"We live in an always-on world, where perpetual connection has revolutionized daily life and unhinged the effectiveness of traditional marketing approaches. Never before has it been so critical for our clients to think about their customer's complete brand and buying experience as a single landscape _ a never-ending narrative that offers an everywhere, anytime experience of their promise and message, be it during attraction, engagement or transaction."},
{"booth":51,"Room":"Louis","Floor":2,"nameId":"hfz-llc","name":"Hanley, Flight & Zimmerman LLC","am":null,"bme":null,"chem":null,"civil":null,"ce":1,"cs":null,"ee":1,"enve":null,"ie":null,"made":null,"matsci":null,"mech":1,"noneng":1,"msphd":null,"fte":1,"coop":null,"intern":null,"description":"HFZ is a firm of innovative legal professionals with several decades of combined real-world technical expertise and legal experience, proudly specializing in a broad spectrum of technical areas. We provide expert, high-value patent prosecution and counseling services to numerous companies including top patent-earning entities in the U.S.\n With actual, practical expertise in mechanical, electrical, and software arts, we craft useful claims and identify effective enforcement and defensive opportunities for your intellectual property. Throughout prosecution, HFZ keeps your business goals in mind and provides you with information you need to make business decisions."},
{"booth":52,"Room":"Louis","Floor":2,"nameId":"avantcredit","name":"AvantCredit","am":null,"bme":null,"chem":null,"civil":null,"ce":1,"cs":1,"ee":null,"enve":null,"ie":null,"made":null,"matsci":null,"mech":null,"noneng":1,"msphd":null,"fte":1,"coop":null,"intern":null,"description":"Our team has over 25 years of combined experience giving online credit options. Our mission is to give affordable personal loans to responsible people who should not have to settle for an expensive payday loan or take hours out of their busy day to travel to a loan store or bank."},
{"booth":53,"Room":"Louis","Floor":2,"nameId":"spacex","name":"SpaceX","am":null,"bme":null,"chem":null,"civil":null,"ce":1,"cs":1,"ee":1,"enve":null,"ie":1,"made":1,"matsci":1,"mech":1,"noneng":1,"msphd":null,"fte":1,"coop":1,"intern":1,"description":"SpaceX has gained worldwide attention for a series of historic milestones. It is the only private company ever to return a spacecraft from low-Earth orbit, which it first accomplished in December 2010. The company made history again in May 2012 when its Dragon spacecraft attached to the International Space Station, exchanged cargo payloads, and returned safely to Earth Ü a technically challenging feat previously accomplished only by governments. Since then Dragon has twice delivered cargo to and from the space station, in the first of many cargo resupply missions for NASA."},
{"booth":54,"Room":"Lake","Floor":2,"nameId":"dmc-inc","name":"DMC Inc","am":null,"bme":null,"chem":null,"civil":null,"ce":1,"cs":1,"ee":1,"enve":null,"ie":null,"made":null,"matsci":null,"mech":1,"noneng":null,"msphd":null,"fte":1,"coop":null,"intern":null,"description":"DMC offers high-caliber engineering and software development services for manufacturing, testing, and product development organizations in the Chicago area and throughout the world. Since 1996, we have been building mission-critical systems for top organizations."},
{"booth":55,"Room":"Lake","Floor":2,"nameId":"pepsico","name":"PepsiCo","am":1,"bme":null,"chem":null,"civil":null,"ce":1,"cs":1,"ee":null,"enve":null,"ie":1,"made":null,"matsci":null,"mech":null,"noneng":null,"msphd":null,"fte":null,"coop":null,"intern":null,"description":"PepsiCo, Inc. was established through the merger of Pepsi-Cola and Frito-Lay. PepsiCo, Inc. (PepsiCo), incorporated on November 13, 1986, is a global food and beverage company. The Company makes, markets, sells and distributes a range of foods and beverages in more than 200 countries and territories. PepsiCo is organized into four business units: PepsiCo Americas Foods (PAF), which includes Frito-Lay North America (FLNA), Quaker Foods North America (QFNA) and all of its Latin American food and snack businesses (LAF); PepsiCo Americas Beverages (PAB), which includes all of its North American and Latin American beverage businesses; PepsiCo Europe, which includes all beverage, food and snack businesses in Europe, and PepsiCo Asia, Middle East and Africa (AMEA), which includes all beverage, food and snack businesses in AMEA."},
{"booth":56,"Room":"Lake","Floor":2,"nameId":"wms","name":"WMS","am":1,"bme":null,"chem":null,"civil":null,"ce":1,"cs":1,"ee":1,"enve":null,"ie":null,"made":1,"matsci":null,"mech":1,"noneng":null,"msphd":1,"fte":1,"coop":1,"intern":1,"description":"WMS is a leading global innovator in the design, manufacture and distribution of electronic and digital gaming entertainment and gaming machines for the casino industry. The WMS core values of Passion, Integrity, Innovation, Quality and Respect create a deeply embedded Culture of Innovation that fuels the imagination and creativity of our development teams and drives innovation with a purpose.\n Energized by a fervent focus on our Player Driven Innovation approach to product development, we create imaginative and engaging game content enabled by advanced, groundbreaking technologies to deliver dynamic, transformative player entertainment experiences in the casino and online. The talented WMS team produces some of the world's most popular casino games, and creates new and differentiated gaming platforms that consistently set the industry standard."},
{"booth":57,"Room":"Lake","Floor":2,"nameId":"nielsen","name":"Nielsen","am":1,"bme":null,"chem":null,"civil": null,"ce":1,"cs":1,"ee":1,"enve": null,"ie":1,"made":1,"matsci": null,"mech":1,"noneng":1,"msphd":1,"fte":1,"coop":null,"intern":1,"description":"Whether youre eyeing markets in the next town or across continents, we understand the importance of knowing what consumers watch and buy. That\ns our passion and the very heart of our business.\n We study consumers in more than 100 countries to give you the most complete view of trends and habits worldwide. And were constantly evolving, not only in terms of where we measure, or what we measure, but also in how our insights can help you drive profitable growth."},
{"booth":58,"Room":"Lake","Floor":2,"nameId":"dropbox","name":"Dropbox","am":1,"bme":1,"chem":1,"civil":1,"ce":1,"cs":1,"ee":1,"enve":1,"ie":1,"made":1,"matsci":1,"mech":1,"noneng":1,"msphd":null,"fte":1,"coop":null,"intern":null,"description":"Dropbox is a free service that lets you bring all your photos, docs, and videos anywhere, and share them easily. Any file you save to your Dropbox will automatically save to all your computers, your phone or iPad, and the Dropbox website. Dropbox also makes it easy to share with others. And if your computer melts down, you can restore all your files from the Dropbox website with a couple clicks. Dropbox has more than 200,000,000 users."},
{"booth":59,"Room":"Lake","Floor":2,"nameId":"thoughtworks","name":"Thoughtworks","am":1,"bme":1,"chem":1,"civil":1,"ce":1,"cs":1,"ee":1,"enve":1,"ie":1,"made":1,"matsci":1,"mech":1,"noneng":1,"msphd":null,"fte":1,"coop":null,"intern":null,"description":"A community of passionate individuals whose purpose is to revolutionize software design, creation and delivery, while advocating for positive social change.\n Wherever we are in the world, ThoughtWorkers share the same cultural characteristics and imperatives. We come to work as ourselves. We enjoy each others company. We value honesty and transparency. Appearances and backgrounds arent important to us; ideas and doing the right thing are. We abhor and reject discrimination and inequality and promote diversity in all its forms. We proudly, passionately and actively strive to make both ThoughtWorks and our industry more reflective and inclusive of the society that we serve."},
{"booth":60,"Room":"Lake","Floor":2,"nameId":"allstate","name":"Allstate Insurance","am":null,"bme":null,"chem":null,"civil":null,"ce":1,"cs":1,"ee":null,"enve":null,"ie":null,"made":null,"matsci":null,"mech":null,"noneng":1,"msphd":null,"fte":1,"coop":null,"intern":1,"description":"The Allstate Corporation is the largest publicly held personal lines property and casualty insurer in America. Allstate was founded in 1931 and became a publicly traded company in 1993. We are listed on the New York Stock Exchange under the trading symbol ALL. Allstate is widely known through the \"You're In Good Hands With Allstate Œ\" slogan. As of year-end 2012, Allstate had $126.9 billion in total assets. Allstate is reinventing protection and retirement to help approximately 16 million households insure what they have today and better prepare for tomorrow."},
{"booth":61,"Room":"Lake","Floor":2,"nameId":"deloitte","name":"Deloitte Consulting","am":1,"bme":1,"chem":null,"civil":1,"ce":1,"cs":1,"ee":1,"enve":1,"ie":1,"made":1,"matsci":1,"mech":1,"noneng":1,"msphd":null,"fte":1,"coop":null,"intern":null,"description":"_Deloitteî is the brand under which tens of thousands of dedicated professionals in independent firms throughout the world collaborate to provide audit, consulting, financial advisory, risk management and tax services to selected clients. These firms are members of Deloitte Touche Tohmatsu Limited (DTTL), a UK private company limited by guarantee. "},
{"booth":62,"Room":"Lake","Floor":2,"nameId":"oracle","name":"Oracle America, Inc.","am":1,"bme":1,"chem":1,"civil":1,"ce":1,"cs":1,"ee":1,"enve":1,"ie":1,"made":1,"matsci":1,"mech":1,"noneng":1,"msphd":null,"fte":1,"coop":null,"intern":null,"description":"Oracle continually applies good corporate governance principles. The composition and activities of the company's Board of Directors, the approach to public disclosure, and the availability of ethics and business conduct resources for employees exemplifies the company's commitment to good corporate governance practices. Analysts and Investors also have targeted information available to them. "},
{"booth":63,"Room":"Lake","Floor":2,"nameId":"ge","name":"General Electric (GE)","am":1,"bme":1,"chem":1,"civil":1,"ce":1,"cs":1,"ee":1,"enve":1,"ie":1,"made":1,"matsci":1,"mech":1,"noneng":1,"msphd":1,"fte":1,"coop":1,"intern":1,"description":"The Industrial Internet is bringing about a profound transformation to global industry, by connecting more intelligent machines, advanced analytics, and people at work. This deeper meshing of the digital world with the world of machines has the potential to bring enormous economic benefits. We have estimated that this new wave of innovation could boost global GDP by as much as $10-15 trillion over the next 20 years, through accelerated productivity growth."},
{"booth":64,"Room":"Northwestern","Floor":2,"nameId":"mozilla","name":"Mozilla","am":null,"bme":null,"chem":null,"civil":null,"ce":null,"cs":1,"ee":null,"enve":null,"ie":null,"made":null,"matsci":null,"mech":null,"noneng":null,"msphd":null,"fte":null,"coop":null,"intern":1,"description":"Our mission is to promote openness, innovation & opportunity on the Web.\n At Mozilla, were a global community of technologists, thinkers and builders working together to keep the Internet alive and accessible, so people worldwide can be informed contributors and creators of the Web. We believe this act of human collaboration across an open platform is essential to individual growth and our collective future."},
{"booth":65,"Room":"Northwestern","Floor":2,"nameId":"tata","name":"Tata Consultancy Services","am":1,"bme":null,"chem":null,"civil":null,"ce":1,"cs":1,"ee":1,"enve":null,"ie":null,"made":null,"matsci":null,"mech":null,"noneng":null,"msphd":null,"fte":1,"coop":null,"intern":null,"description":"When you choose Tata Consultancy Services (TCS) as your IT services, consulting and business solutions partner, you will discover what so many global enterprises have already discoveredÜthe power of certainty.\n  We are a leader in the global marketplace and among the top 10 technology firms in the world. Our continued rapid growth is a testament to the certainty our clients experience every day. Building on more than 40 years of experience, we add real value to global organizations through domain expertise plus solutions with proven success in the field and world-class service. Its how we keep you moving forward."},
{"booth":66,"Room":"Northwestern","Floor":2,"nameId":"hospira","name":"Hospira","am":null,"bme":1,"chem":1,"civil":null,"ce":1,"cs":1,"ee":1,"enve":null,"ie":1,"made":1,"matsci":null,"mech":1,"noneng":null,"msphd":null,"fte":null,"coop":1,"intern":null,"description":"Hospira is the world's leading provider of injectable drugs and infusion technologies. Through our broad, integrated portfolio, we are uniquely positioned to Advance WellnessŽ by improving patient and caregiver safety while reducing healthcare costs. \n  Through our offering of high-quality, lower-cost generic medications, we continue to help reduce the overall costs of healthcare Ü to improve both the affordability of care for patients and the financial strength of the global healthcare system.  \n \n By working with our device customers to integrate technologies at the point of care, we are the partner of choice for improving patient and caregiver safety, clinical outcomes, cost management, as well as caregiver efficiency and effectiveness."},
{"booth":67,"Room":"Northwestern","Floor":2,"nameId":"pec","name":"PEC North America","am":null,"bme":null,"chem":null,"civil":null,"ce":null,"cs":null,"ee":1,"enve":null,"ie":null,"made":1,"matsci":null,"mech":1,"noneng":null,"msphd":null,"fte":1,"coop":null,"intern":null,"description":"Founded in 1984, PEC is now headquartered in Leuven, Belgium with R&D and project management groups in Belgium, Hungary, the United States, China and Japan.\n Our company is staffed with highly educated experts in different technological and functional domains : Robotics, Material Handling, Power Electronics, Embedded Controls, Software , Development (.Net - Oracle), IT Security. This multidisciplinary skill matrix forms the core of PECs technological leadership, and creates substantial competitive advantages for our customers, in terms of quality, reliability and operational cost."},
{"booth":68,"Room":"Northwestern","Floor":2,"nameId":"readyforce","name":"Readyforce","am":1,"bme":null,"chem":null,"civil":1,"ce":1,"cs":1,"ee":1,"enve":null,"ie":1,"made":null,"matsci":null,"mech":1,"noneng":null,"msphd":null,"fte":1,"coop":null,"intern":1,"description":"Readyforce was founded on the belief that the traditional job search process is broken. This is true for both job seekers and hiring companies. We exist to make the job search process better and easier.\n Finding a job is hard, lonely, time-consuming, stressful, painful...it just plain sucks. We believe that Readyforce can dramatically improve the experience by utilizing innovative technologies including social and professional networks, advance matching algorithms and web video. Readyforce will be a launching pad for people to navigate these difficult waters."},
{"booth":69,"Room":"Northwestern","Floor":2,"nameId":"accenture","name":"Accenture","am":null,"bme":1,"chem":1,"civil":1,"ce":1,"cs":1,"ee":1,"enve":1,"ie":1,"made":1,"matsci":1,"mech":1,"noneng":1,"msphd":null,"fte":1,"coop":null,"intern":1,"description":"Accenture helps organizations assess how to maximize their performance and works with them to achieve their vision. We develop and implement technology to improve our clients productivity and efficiency _ and may run parts of their business. Ultimately, we enable our clients to become high-performance businesses and governments."},
{"booth":70,"Room":"Northwestern","Floor":2,"nameId":"shmoop","name":"Shmoop University, Inc.","am":null,"bme":null,"chem":null,"civil":null,"ce":1,"cs":1,"ee":null,"enve":null,"ie":null,"made":null,"matsci":null,"mech":null,"noneng":null,"msphd":1,"fte":1,"coop":1,"intern":1,"description":"Shmoop is a digital publishing company with a point of view. We seek to empower and broaden the range and depth of choices that students have in life. Our teaching \"method\" revolves around the basic notion that learning is often unnecessarily hard so we carry gallons of academic WD-40 that we squirt on the tracks whenever we can."},
{"booth":71,"Room":"Northwestern","Floor":2,"nameId":"ford","name":"Ford Motor Company","am":null,"bme":null,"chem":null,"civil":null,"ce":1,"cs":1,"ee":1,"enve":null,"ie":null,"made":1,"matsci":null,"mech":1,"noneng":null,"msphd":1,"fte":1,"coop":null,"intern":1,"description":"Ford Motor Company is an American multinational automaker headquartered in Dearborn, Michigan, a suburb of Detroit. It was founded by Henry Ford and incorporated on June 16, 1903. The company sells automobiles and commercial vehicles under the Ford brand and luxury cars under the Lincoln brand. In the past it has also produced heavy trucks, tractors and automotive components. Ford owns small stakes in Mazda of Japan and Aston Martin of the United Kingdom. It is listed on the New York Stock Exchange and is controlled by the Ford family, although they have minority ownership."},
{"booth":72,"Room":"Wildcat Room","Floor":1,"nameId":"united-airlines","name":"United Airlines","am":null,"bme":null,"chem":null,"civil":null,"ce":null,"cs":1,"ee":null,"enve":null,"ie":1,"made":null,"matsci":null,"mech":null,"noneng":1,"msphd":null,"fte":1,"coop":null,"intern":1,"description":"United is the worlds leading airline and is focused on being the airline customers want to fly, the airline employees want to work for and the airline shareholders want to invest in.\n United Airlines and United Express operate an average of 5,341 flights a day to more than 360 airports across six continents. In 2012, United and United Express carried more passenger traffic than any other airline in the world and operated nearly two million flights carrying 140 million customers. "},
{"booth":73,"Room":"Wildcat Room","Floor":1,"nameId":"goodyear","name":"Goodyear Tire & Rubber Company","am":null,"bme":null,"chem":1,"civil":null,"ce":null,"cs":null,"ee":1,"enve":null,"ie":null,"made":null,"matsci":1,"mech":1,"noneng":null,"msphd":null,"fte":1,"coop":1,"intern":1,"description":"The Goodyear Tire & Rubber Company was founded in 1898 by 38-year-old Frank Seiberling.\n Looking back, the founding of The Goodyear Tire & Rubber Company in 1898 seems especially remarkable, for the beginning was anything but auspicious. The 38-year-old founder, Frank A. Seiberling, purchased the companys first plant with a $3,500 down payment -- using money he borrowed from a brother-in-law Lucius C. Miles. The rubber and cotton that were the lifeblood of the industry had to be transported from halfway around the world, to a landlocked town that had only limited rail transportation. "},
{"booth":74,"Room":"Wildcat Room","Floor":1,"nameId":"at-t","name":"AT&T","am":null,"bme":null,"chem":null,"civil":null,"ce":1,"cs":1,"ee":1,"enve":null,"ie":null,"made":null,"matsci":null,"mech":1,"noneng":1,"msphd":null,"fte":1,"coop":null,"intern":1,"description":"AT&T is bringing it all together for our customers, from revolutionary smartphones to next-generation TV services and sophisticated solutions for multi-national businesses.\n \n For more than a century, we have consistently provided innovative, reliable, high-quality products and services and excellent customer care. Today, our mission is to connect people with their world, everywhere they live and work, and do it better than anyone else. We're fulfilling this vision by creating new solutions for consumers and businesses and by driving innovation in the communications and entertainment industry."},
{"booth":75,"Room":"Wildcat Room","Floor":1,"nameId":"s-c-electric","name":"S&C Electric","am":null,"bme":null,"chem":null,"civil":null,"ce":null,"cs":null,"ee":null,"enve":null,"ie":null,"made":null,"matsci":null,"mech":null,"noneng":null,"msphd":null,"fte":null,"coop":null,"intern":null,"description":""},
{"booth":76,"Room":"Wildcat Room","Floor":1,"nameId":"exxon-mobil","name":"ExxonMobil","am":null,"bme":null,"chem":1,"civil":1,"ce":null,"cs":null,"ee":1,"enve":null,"ie":null,"made":null,"matsci":1,"mech":1,"noneng":1,"msphd":1,"fte":1,"coop":1,"intern":1,"description":"Over the last 125 years ExxonMobil has evolved from a regional marketer of kerosene in the U.S. to the largest publicly traded petroleum and petrochemical enterprise in the world. Today we operate in most of the world's countries and are best known by our familiar brand names: Exxon, Esso and Mobil. We make the products that drive modern transportation, power cities, lubricate industry and provide petrochemical building blocks that lead to thousands of consumer goods. "},
{"booth":77,"Room":"Wildcat Room","Floor":1,"nameId":"facebook","name":"Facebook","am":null,"bme":null,"chem":null,"civil":null,"ce":null,"cs":1,"ee":null,"enve":null,"ie":null,"made":null,"matsci":null,"mech":null,"noneng":null,"msphd":null,"fte":1,"coop":null,"intern":1,"description":"Founded in 2004, Facebooks mission is to give people the power to share and make the world more open and connected. People use Facebook to stay connected with friends and family, to discover whats going on in the world, and to share and express what matters to them."},
{"booth":78,"Room":"Wildcat Room","Floor":1,"nameId":"discover","name":"Discover Financial Services","am":null,"bme":null,"chem":null,"civil":null,"ce":null,"cs":null,"ee":null,"enve":null,"ie":1,"made":1,"matsci":null,"mech":null,"noneng":null,"msphd":null,"fte":1,"coop":null,"intern":null,"description":"When we introduced the first cash rewards credit card in 1986, we committed ourselves to meeting the needs of our card members with the best possible customer service - and we still stand by that commitment today. We're building our company by listening to consumers and developing products and programs that help them get the most for their money. Beyond credit cards, our banking and payments businesses offer rewarding products backed by that same commitment to high-quality service that we have had from the start."},
{"booth":79,"Room":"Wildcat Room","Floor":1,"nameId":"3m","name":"3M Company","am":null,"bme":null,"chem":1,"civil":null,"ce":1,"cs":null,"ee":1,"enve":null,"ie":1,"made":1,"matsci":1,"mech":1,"noneng":null,"msphd":null,"fte":1,"coop":null,"intern":1,"description":"3M is a global innovation company that never stops inventing. Over the years, our innovations have improved daily life for hundreds of millions of people all over the world. We have made driving at night easier, made buildings safer, and made consumer electronics lighter, less energy-intensive and less harmful to the environment. We even helped put a man on the moon. Every day at 3M, one idea always leads to the next, igniting momentum to make progress possible around the world."},
{"booth":80,"Room":"Big 10","Floor":1,"nameId":"baxter","name":"Baxter Healthcare Corporation","am":null,"bme":1,"chem":1,"civil":null,"ce":null,"cs":null,"ee":null,"enve":null,"ie":1,"made":null,"matsci":1,"mech":1,"noneng":null,"msphd":null,"fte":1,"coop":1,"intern":1,"description":"Baxter International Inc. (NYSE:BAX), through its subsidiaries, develops, manufactures and markets products that save and sustain the lives of people with hemophilia, immune disorders, infectious diseases, kidney disease, trauma, and other chronic and acute medical conditions. As a global, diversified healthcare company, Baxter applies a unique combination of expertise in medical devices, pharmaceuticals and biotechnology to create products that advance patient care worldwide. "},
{"booth":81,"Room":"Big 10","Floor":1,"nameId":"p-g","name":"P&G","am":null,"bme":1,"chem":1,"civil":null,"ce":null,"cs":null,"ee":null,"enve":null,"ie":null,"made":1,"matsci":1,"mech":null,"noneng":1,"msphd":1,"fte":1,"coop":1,"intern":1,"description":"Companies like P&G are a force in the world. Our market capitalization is greater than the GDP of many countries, and we market our products in more than 180 countries. With this stature comes both responsibility and opportunity. Our responsibility is to be an ethical corporate citizenÜbut our opportunity is something far greater, and is embodied in our Purpose.\n \n We will provide branded products and services of superior quality and value that improve the lives of the worlds consumers, now and for generations to come. As a result, consumers will reward us with leadership sales, profit and value creation, allowing our people, our shareholders and the communities in which we live and work to prosper."},
{"booth":82,"Room":"Big 10","Floor":1,"nameId":"northrop-grumman","name":"Northrop Grumman","am":null,"bme":null,"chem":null,"civil":null,"ce":1,"cs":1,"ee":null,"enve":null,"ie":null,"made":null,"matsci":null,"mech":null,"noneng":null,"msphd":1,"fte":1,"coop":null,"intern":1,"description":"Northrop Grumman is a leading global security company providing innovative systems, products and solutions in unmanned systems, cyber, C4ISR, and logistics and modernization to government and commercial customers worldwide. \n Our mission is to be at the forefront of technology and innovation, delivering superior capability in tandem with maximized cost efficiencies. The security solutions we provide help secure freedoms for our nation as well as those of our allies. Squarely meeting our obligations, fiscally and technologically, isn't just a business goal, but a moral imperative. To that end, as we evolve as a company, the responsibility we feel for our country and the citizens and troops we help support grows with us. _"},
{"booth":83,"Room":"Big 10","Floor":1,"nameId":"gaf","name":"GAF","am":null,"bme":null,"chem":1,"civil":null,"ce":null,"cs":null,"ee":1,"enve":null,"ie":null,"made":null,"matsci":1,"mech":1,"noneng":null,"msphd":null,"fte":null,"coop":1,"intern":null,"description":"Founded in 1886, GAF has become North Americas largest manufacturer of commercial and residential roofing. Our success in growing the company to nearly $3 billion in sales has been based on our unique philosophy of: Helping property owners & architects to make their best and safest roofing choices, Helping supportive distributors and roofing contractors to build their businesses and avoid hassles"},
{"booth":84,"Room":"Big 10","Floor":1,"nameId":"microsoft","name":"Microsoft","am":null,"bme":null,"chem":null,"civil":null,"ce":1,"cs":1,"ee":1,"enve":null,"ie":null,"made":null,"matsci":null,"mech":null,"noneng":null,"msphd":1,"fte":1,"coop":1,"intern":1,"description":"At Microsoft, we're motivated and inspired every day by how our customers use our software to find creative solutions to business problems, develop breakthrough ideas, and stay connected to what's most important to them. We are committed long term to the mission of helping our customers realize their full potential. Just as we constantly update and improve our products, we want to continually evolve our company to be in the best position to accelerate new technologies as they emerge and to better serve our customers."}
];

  // booth might change, id shouldn't
  // also the room and floor of booth won't change
  // hence lump all the booth information together
  // reference booth number in company object in array
  // access company by unique url identifier
  // nameId --> compId
  // have a separate array for booth info
  // and possibly dynamically changing svg based on search inputs??

  // Considered not having separate room and floor property fields
  // and just rely on an svg position
  // but it seems reasonable that someone might filter by a certain room
  // (or part of a room, perhaps)
  // especially if that room contains a LOT of booths/tables


// this is data about the booths

// can't decide if should be separate from teh svg data or not
// i think it makes sense to keep separate
// probably should pull out room and lfoor info from companies though

  var booths = [
  {"booth":1,"Room":"Louis","Floor":2},
  {"booth":2,"Room":"Louis","Floor":2},
  {"booth":3,"Room":"Louis","Floor":2},
  {"booth":4,"Room":"Louis","Floor":2},
  {"booth":5,"Room":"Louis","Floor":2},
  {"booth":6,"Room":"Louis","Floor":2},
  {"booth":7,"Room":"Louis","Floor":2},
  {"booth":8,"Room":"Louis","Floor":2},
  {"booth":9,"Room":"Louis","Floor":2},
  {"booth":10,"Room":"Louis","Floor":2},
  {"booth":11,"Room":"Louis","Floor":2},
  {"booth":12,"Room":"Louis","Floor":2},
  {"booth":13,"Room":"Louis","Floor":2},
  {"booth":14,"Room":"Louis","Floor":2},
  {"booth":15,"Room":"Louis","Floor":2},
  {"booth":16,"Room":"Louis","Floor":2},
  {"booth":17,"Room":"Louis","Floor":2},
  {"booth":18,"Room":"Louis","Floor":2},
  {"booth":19,"Room":"Louis","Floor":2},
  {"booth":20,"Room":"Louis","Floor":2},
  {"booth":21,"Room":"Louis","Floor":2},
  {"booth":22,"Room":"Louis","Floor":2},
  {"booth":23,"Room":"Louis","Floor":2},
  {"booth":24,"Room":"Louis","Floor":2},
  {"booth":25,"Room":"Louis","Floor":2},
  {"booth":26,"Room":"Louis","Floor":2},
  {"booth":27,"Room":"Louis","Floor":2},
  {"booth":28,"Room":"Louis","Floor":2},
  {"booth":29,"Room":"Louis","Floor":2},
  {"booth":30,"Room":"Louis","Floor":2},
  {"booth":31,"Room":"Louis","Floor":2},
  {"booth":32,"Room":"Louis","Floor":2},
  {"booth":33,"Room":"Louis","Floor":2},
  {"booth":34,"Room":"Louis","Floor":2},
  {"booth":35,"Room":"Louis","Floor":2},
  {"booth":36,"Room":"Louis","Floor":2},
  {"booth":37,"Room":"Louis","Floor":2},
  {"booth":38,"Room":"Louis","Floor":2},
  {"booth":39,"Room":"Louis","Floor":2},
  {"booth":40,"Room":"Louis","Floor":2},
  {"booth":41,"Room":"Louis","Floor":2},
  {"booth":42,"Room":"Louis","Floor":2},
  {"booth":43,"Room":"Louis","Floor":2},
  {"booth":44,"Room":"Louis","Floor":2},
  {"booth":45,"Room":"Louis","Floor":2},
  {"booth":46,"Room":"Louis","Floor":2},
  {"booth":47,"Room":"Louis","Floor":2},
  {"booth":48,"Room":"Louis","Floor":2},
  {"booth":49,"Room":"Louis","Floor":2},
  {"booth":50,"Room":"Louis","Floor":2},
  {"booth":51,"Room":"Louis","Floor":2},
  {"booth":52,"Room":"Louis","Floor":2},
  {"booth":53,"Room":"Louis","Floor":2},
  {"booth":54,"Room":"Lake","Floor":2},
  {"booth":55,"Room":"Lake","Floor":2},
  {"booth":56,"Room":"Lake","Floor":2},
  {"booth":57,"Room":"Lake","Floor":2},
  {"booth":58,"Room":"Lake","Floor":2},
  {"booth":59,"Room":"Lake","Floor":2},
  {"booth":60,"Room":"Lake","Floor":2},
  {"booth":61,"Room":"Lake","Floor":2},
  {"booth":62,"Room":"Lake","Floor":2},
  {"booth":63,"Room":"Lake","Floor":2},
  {"booth":64,"Room":"Northwestern","Floor":2},
  {"booth":65,"Room":"Northwestern","Floor":2},
  {"booth":66,"Room":"Northwestern","Floor":2},
  {"booth":67,"Room":"Northwestern","Floor":2},
  {"booth":68,"Room":"Northwestern","Floor":2},
  {"booth":69,"Room":"Northwestern","Floor":2},
  {"booth":70,"Room":"Northwestern","Floor":2},
  {"booth":71,"Room":"Northwestern","Floor":2},
  {"booth":72,"Room":"Wildcat Room","Floor":1},
  {"booth":73,"Room":"Wildcat Room","Floor":1},
  {"booth":74,"Room":"Wildcat Room","Floor":1},
  {"booth":75,"Room":"Wildcat Room","Floor":1},
  {"booth":76,"Room":"Wildcat Room","Floor":1},
  {"booth":77,"Room":"Wildcat Room","Floor":1},
  {"booth":78,"Room":"Wildcat Room","Floor":1},
  {"booth":79,"Room":"Wildcat Room","Floor":1},
  {"booth":80,"Room":"Big 10","Floor":1},
  {"booth":81,"Room":"Big 10","Floor":1},
  {"booth":82,"Room":"Big 10","Floor":1},
  {"booth":83,"Room":"Big 10","Floor":1},
  {"booth":84,"Room":"Big 10","Floor":1}
  ];


      var boothLayoutSVG = [
        {
            "id": "booth1",
            "x": 824,
            "y": 620
        },
        {
            "id": "booth2",
            "x": 698,
            "y": 620
        },
        {
            "id": "booth3",
            "x": 570,
            "y": 620
        },
        {
            "id": "booth4",
            "x": 443,
            "y": 620
        },
        {
            "id": "booth5",
            "x": 315,
            "y": 620
        },
        {
            "id": "booth6",
            "x": 188,
            "y": 620
        },
        {
            "id": "booth7",
            "x": 64,
            "y": 620
        },
        {
            "id": "booth8",
            "x": 11,
            "y": 550.0000228881836
        },
        {
            "id": "booth9",
            "x": 45,
            "y": 450
        },
        {
            "id": "booth10",
            "x": 170,
            "y": 450
        },
        {
            "id": "booth11",
            "x": 293,
            "y": 450
        },
        {
            "id": "booth12",
            "x": 418,
            "y": 450
        },
        {
            "id": "booth13",
            "x": 545,
            "y": 450
        },
        {
            "id": "booth14",
            "x": 670,
            "y": 450
        },
        {
            "id": "booth15",
            "x": 797,
            "y": 450
        },
        {
            "id": "booth16",
            "x": 944,
            "y": 450
        },
        {
            "id": "booth17",
            "x": 944,
            "y": 400
        },
        {
            "id": "booth18",
            "x": 797,
            "y": 400
        },
        {
            "id": "booth19",
            "x": 670,
            "y": 400
        },
        {
            "id": "booth20",
            "x": 543,
            "y": 400
        },
        {
            "id": "booth21",
            "x": 416,
            "y": 400
        },
        {
            "id": "booth22",
            "x": 291,
            "y": 400
        },
        {
            "id": "booth23",
            "x": 170,
            "y": 400
        },
        {
            "id": "booth24",
            "x": 45,
            "y": 400
        },
        {
            "id": "booth25",
            "x": 36,
            "y": 325
        },
        {
            "id": "booth26",
            "x": 163,
            "y": 325
        },
        {
            "id": "booth27",
            "x": 288,
            "y": 325
        },
        {
            "id": "booth28",
            "x": 413,
            "y": 325
        },
        {
            "id": "booth29",
            "x": 538,
            "y": 325
        },
        {
            "id": "booth30",
            "x": 663,
            "y": 325
        },
        {
            "id": "booth31",
            "x": 788,
            "y": 325
        },
        {
            "id": "booth32",
            "x": 933,
            "y": 325
        },
        {
            "id": "booth33",
            "x": 932,
            "y": 275
        },
        {
            "id": "booth34",
            "x": 779,
            "y": 275
        },
        {
            "id": "booth35",
            "x": 650,
            "y": 275
        },
        {
            "id": "booth36",
            "x": 519,
            "y": 275
        },
        {
            "id": "booth37",
            "x": 390,
            "y": 275
        },
        {
            "id": "booth38",
            "x": 269,
            "y": 275
        },
        {
            "id": "booth39",
            "x": 138,
            "y": 275
        },
        {
            "id": "booth40",
            "x": 11,
            "y": 275
        },
        {
            "compId": "ida",
            "id": "booth41",
            "x": 1118,
            "y": 385
        },
        {
            "id": "booth42",
            "x": 1113,
            "y": 333
        },
        {
            "id": "booth43",
            "x": 1114,
            "y": 277
        },
        {
            "id": "booth44",
            "x": 1115,
            "y": 180
        },
        {
            "id": "booth45",
            "x": 982,
            "y": 180
        },
        {
            "id": "booth46",
            "x": 863,
            "y": 180
        },
        {
            "id": "booth47",
            "x": 738,
            "y": 180
        },
        {
            "id": "booth48",
            "x": 621,
            "y": 180
        },
        {
            "id": "booth49",
            "x": 492,
            "y": 180
        },
        {
            "id": "booth50",
            "x": 365,
            "y": 180
        },
        {
            "id": "booth51",
            "x": 246,
            "y": 180
        },
        {
            "id": "booth52",
            "x": 125,
            "y": 180
        },
        {
            "id": "booth53",
            "x": 2,
            "y": 180
        },
        {
            "id": "booth54",
            "x": 891,
            "y": 1224
        },
        {
            "id": "booth55",
            "x": 782,
            "y": 1140
        },
        {
            "id": "booth56",
            "x": 645,
            "y": 1142
        },
        {
            "id": "booth57",
            "x": 514,
            "y": 1141
        },
        {
            "id": "booth58",
            "x": 377,
            "y": 1141
        },
        {
            "id": "booth59",
            "x": 228,
            "y": 1173
        },
        {
            "id": "booth60",
            "x": 229,
            "y": 1223
        },
        {
            "id": "booth61",
            "x": 456,
            "y": 1277
        },
        {
            "id": "booth62",
            "x": 581,
            "y": 1277
        },
        {
            "id": "booth63",
            "x": 706,
            "y": 1277
        },
        {
            "id": "booth64",
            "x": 901,
            "y": 964.0000305175781
        },
        {
            "id": "booth65",
            "x": 26,
            "y": 1009.0000305175781
        },
        {
            "id": "booth66",
            "x": 151,
            "y": 1009.0000305175781
        },
        {
            "id": "booth67",
            "x": 276,
            "y": 1009.0000305175781
        },
        {
            "id": "booth68",
            "x": 401,
            "y": 1009.0000305175781
        },
        {
            "id": "booth69",
            "x": 526,
            "y": 1009.0000305175781
        },
        {
            "id": "booth70",
            "x": 651,
            "y": 1009.0000305175781
        },
        {
            "id": "booth71",
            "x": 776,
            "y": 1009.0000305175781
        },
        {
            "id": "booth72",
            "x": 900,
            "y": 727.0000305175781
        },
        {
            "id": "booth73",
            "x": 25,
            "y": 772.0000305175781
        },
        {
            "id": "booth74",
            "x": 150,
            "y": 772.0000305175781
        },
        {
            "id": "booth75",
            "x": 275,
            "y": 772.0000305175781
        },
        {
            "id": "booth76",
            "x": 400,
            "y": 772.0000305175781
        },
        {
            "id": "booth77",
            "x": 525,
            "y": 772.0000305175781
        },
        {
            "id": "booth78",
            "x": 650,
            "y": 772.0000305175781
        },
        {
            "compId": "3m",
            "id": "booth79",
            "x": 775,
            "y": 772.0000305175781
        },
        {
            "id": "booth80",
            "x": 527,
            "y": 867.0000305175781
        },
        {
            "id": "booth81",
            "x": 27,
            "y": 866.0000305175781
        },
        {
            "id": "booth82",
            "x": 152,
            "y": 866.0000305175781
        },
        {
            "id": "booth83",
            "x": 277,
            "y": 866.0000305175781
        },
        {
            "id": "booth84",
            "x": 402,
            "y": 866.0000305175781
        }
    ];