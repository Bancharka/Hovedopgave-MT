import "./Ressources.scss";
import ContentHeader from "../../components/contentheader/ContentHeader";
import Divider from "../../components/divider/Divider";
import Footer from "../../components/footer/Footer";
import TextImage from "../../components/textimage/TextImage";
import PageNav from "../../components/page-nav/PageNav";
import Blurryblop from "../../components/blurryblop/Blurryblop";

export default function Ressources() {
	return (
		<>
			<section className="ressources page-container">
				<div className="ressources__desktopblop">
					<Blurryblop
						style={{ top: "50px", left: "-500px", width: "500px" }}
					/>
					<Blurryblop
						style={{ top: "600px", left: "450px", width: "800px" }}
					/>
					<Blurryblop
						style={{ top: "2400px", left: "300px", width: "400px" }}
					/>
					<Blurryblop
						style={{ top: "3000px", left: "400px", width: "700px" }}
					/>
				</div>
                <div className="ressources__mobileblop">
					<Blurryblop
						style={{ top: "50px", left: "-50px",  }}
					/>
					<Blurryblop
						style={{ top: "600px", left: "60px", }}
					/>
					<Blurryblop
						style={{ top: "2100px", left: "50px", }}
					/>
					<Blurryblop
						style={{ top: "3500px", left: "40px",  }}
					/>
				</div>
				<ContentHeader
					tagline="Dine værktøjer til praktikken."
					heading="Ressourcer"
					description="Her er nogle informationer omkring hvad vi bruger til hverdag. Det er ikke et krav at du kan dette før praktikstart, det er kun hvis du ønsker at forberede dig mere!"
				/>
				<Divider />
				<TextImage
					heading="Wordpress Block Editor"
					description="WordPress Block Editor, også kendt som Gutenberg-editoren, er standardværktøjet til at oprette og redigere indhold i WordPress. Den blev lanceret med WordPress 5.0 i 2018 og erstattede den klassiske editor. Editorens blokbaserede system giver brugere mulighed for nemt at strukturere indhold med tekst, billeder, videoer og andre elementer. Med sin intuitive brugerflade og fleksible layoutmuligheder gør den det lettere at skabe visuelt tiltalende sider uden avanceret kodning."
					links={[
						{
							text: "Wordpress dokumentation",
							href: "https://wordpress.org/documentation/article/wordpress-block-editor/",
						},
						{
							text: "Wordpress enkelte blokke dokumentation",
							href: "https://wordpress.github.io/gutenberg/?path=/story/docs-introduction--page",
						},
					]}
				/>
				<img
					className="ressources__images"
					src="img/ressources/wp-block-editor.jpg"
					alt="Wordpress block editor"
				/>
				<Divider />
				<TextImage
					heading="Morning Medley"
					description="WordPress er en fremragende platform til indholdsoprettelse og hurtig etablering af en simpel hjemmeside. Dog har større WordPress-applikationer en tendens til at udvikle sig og blive komplekse, hvilket ofte resulterer i lange og uoverskuelige functions.php-filer. Morningmedley løser dette problem ved at implementere et struktureret framework til sådanne applikationer. Det sikrer, at hver komponent har sin egen plads, hvilket gør det lettere at bevare orden og overskuelighed, selv når projekter vokser. Derudover sigter Morningmedley mod at forbedre brugervenligheden af visse WordPress-elementer og introducere vigtige funktioner."
					links={[
						{
							text: "Morning Medley dokumentation",
							href: "internal-projects-morningmedley-docs.mtt-prod.mtra.in",
						},
					]}
				/>
				<img
					className="ressources__images"
					src="img/ressources/morningmedley.png"
					alt="Morning Medley"
				/>
				<Divider />
				<TextImage
					heading="Figma"
					description="Figma er et webbaseret designværktøj, der bruges til at skabe brugergrænseflader og prototyper. Det er populært blandt designere og udviklere på grund af dets samarbejdsmuligheder, hvilket gør det muligt for flere brugere at arbejde på det samme projekt samtidigt. Figma tilbyder en række funktioner, herunder vektorgrafikredigering, komponenter, prototyping og integration med andre værktøjer. Det er ideelt til at designe responsive layouts og dele designs med interessenter."
					links={[
						{
							text: "Figma dokumentation",
							href: "https://help.figma.com/hc/en-us",
						},
					]}
				/>
				<img
					className="ressources__images"
					src="img/ressources/figma.png"
					alt="Figma"
				/>
				<Divider />
				<TextImage
					heading="React"
					description="Hos Morningtrain bruger vi React til at udvikle vores webapplikationer. React er et JavaScript-bibliotek, der gør det muligt at bygge brugergrænseflader ved hjælp af komponenter. Det er kendt for sin effektivitet og fleksibilitet, hvilket gør det til et populært valg blandt udviklere. React anvender en virtuel DOM, der optimerer opdateringer og forbedrer ydeevnen. Det understøtter også en komponentbaseret tilgang, hvilket gør det lettere at genbruge kode og organisere projekter. På denne side kan du lære mere om, eller få en opfrisker på hvordan man koder i React. Hvis du har styr på det når du starter vil det være en stor fordel."
					links={[
						{
							text: "React dokumentation",
							href: "https://react.dev/learn",
						},
					]}
				/>
				<img
					className="ressources__images"
					src="img/ressources/react.png"
					alt="React"
				/>
				<Divider />
				<TextImage
					heading="Git"
					description="Git er et versionskontrolsystem, der bruges til at spore ændringer i kildekode under udvikling. Det giver udviklere mulighed for at arbejde sammen på projekter, holde styr på ændringer og samarbejde effektivt. Git muliggør oprettelse af grene, så udviklere kan arbejde på nye funktioner uden at påvirke hovedkoden. Det er også nyttigt til at rulle tilbage til tidligere versioner af koden, hvis der opstår problemer. Git er en vigtig færdighed for udviklere, da det hjælper med at organisere og administrere kodebaser."
					links={[
						{
							text: "Git dokumentation",
							href: "https://git-scm.com/doc",
						},
					]}
				/>
				<img
					className="ressources__images"
					src="img/ressources/git.png"
					alt="Git"
				/>
				<Divider />
				<TextImage
					heading="BEM"
					description="BEM (Block Element Modifier) er en metode til at organisere CSS-kode og skabe genanvendelige komponenter. Det hjælper med at strukturere CSS-klasser, så de bliver mere læsbare og vedligeholdelsesvenlige. BEM opdeler elementer i blokke, som er uafhængige komponenter, elementer, der er dele af blokken, og modifikatorer, der angiver variationer af blokken eller elementet. Denne tilgang gør det lettere at forstå og arbejde med CSS i større projekter."
					links={[
						{
							text: "BEM dokumentation",
							href: "https://getbem.com/introduction/",
						},
					]}
				/>
				<img
					className="ressources__images"
					src="img/ressources/bem.png"
					alt="BEM"
				/>
				<img
					className="ressources__images"
					src="img/ressources/bem1.png"
					alt="BEM"
				/>
				<Divider />
				<PageNav />
				<Footer />
			</section>
		</>
	);
}
