import Typography from '@mui/material/Typography';
import * as React from 'react';
import axios from "axios"
import Links from './DisplayMGroups';
import key from "./apiKey"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import { CardActionArea } from '@mui/material';
const depImageMap = {
	"Actuarial Science": "https://cdn.uconnectlabs.com/wp-content/uploads/sites/122/2021/07/actuarial-science.jpg",
	"American Studies": "https://www.heritage.org/sites/default/files/styles/full_width_s/public/images/2021-07/GettyImages-1190352363.jpg?itok=L8oqnmsC",
	"Analytics and Decision Sciences": "https://gsce.ca/wp-content/uploads/2018/03/Is-analytics-operations-the-key-to-successful-data-science-Christopher-Hillman-.jpg",
	"Anatomy and Cell Biology": "https://medicine.uiowa.edu/acb/sites/medicine.uiowa.edu.acb/files/flyeggs.jpg",
	"Anthropology": "https://as.tufts.edu/anthropology/sites/g/files/lrezom411/files/styles/large/public/2021-08/homosapiens-diagram-alternative.jpg?itok=1YaJp3fB",
	"Applied Mathematics": "https://studentresearch.engineering.columbia.edu/sites/default/files/styles/cu_crop/public/2017-01/math4.jpg?itok=u1bkQxYE",
	"Arabic": "https://ahlan.b-cdn.net/wp-content/uploads/arabic-modern-colloquial.jpg",
	"Art History": "https://media.timeout.com/images/105795964/750/422/image.jpg",
	"Arts and Humanities": "https://euc.ac.cy/wp-content/uploads/2019/07/humanities-arts-social-education-e1652166631748.jpg",
	"Astronomy": "https://cdn.mos.cms.futurecdn.net/UqKrHFjGaYQ3Fi9rACt6S9.jpg",
	"Biochemistry": "https://assets.telegraphindia.com/telegraph/2022/Mar/1646469056_031.jpg",
	"Biology": "https://science.ubc.ca/sites/science.ubc.ca/files/bio.jpg",
	"Biomedical Engineering": "https://jobs.newscientist.com/getasset/41f62731-a825-4212-9039-819c2cb5eaf3/",
	"Biostatistics": "https://s3.amazonaws.com/utep-uploads/wp-content/uploads/unr/2020/11/16165701/UNR-MPH-Q2-2020_Epidemiology-vs.-Biostatistics-header.jpg",
	"Business Administration": "https://cdn.careers.bloch.umkc.edu/wp-content/uploads/sites/130/2021/11/Business-Adm.png",
	"Calculus": "https://3b1b-posts.us-east-1.linodeobjects.com//images/topics/calculus.jpg",
	"Canadian Studies": "https://canada.macmillan.yale.edu/sites/default/files/canada_flag.jpg",
	"Centre for Global Studies": "https://www.northeastern.edu/graduate/blog/wp-content/uploads/2019/07/what-is-global-studies.jpg",
	"Chemical Biology": "https://epi-rsc.rsc-cdn.org/globalassets/05-journals-books-databases/our-journals/00-journal-pages-heros/Chemical-biology-HERO.jpg?version=9d203c7e",
	"Chemical and Biochemical Engineering": "https://www.biospace.com/getasset/23604506-444d-4fac-8c8c-e11eb6f8a6d2/",
	"Chemistry": "https://jobs.newscientist.com/getasset/c40a5488-11be-43b0-843f-a2e6ef9f0612/",
	"Childhood and Social Institutions": "https://res.cloudinary.com/jerrick/image/upload/f_jpg,fl_progressive,q_auto,w_1024/5df2bd48ca6539001c52b155.png",
	"Chinese": "https://data.chinahighlights.com/image/travelguide/culture/index/chinese-culture-chinese-spring-festival-2022-mobile.jpg",
	"Civil and Environmental Engineering": "https://civildigital.com/wp-content/uploads/2014/05/10303734_831709240192002_3883517004664920041_n.jpg",
	"Classical Studies": "https://classicalstudies.ucsc.edu/images/alexthegreat_1080w.jpg",
	"Communication Sciences and Disorders": "https://s3-us-east-2.amazonaws.com/maryville/wp-content/uploads/2019/04/23155129/Speech-Language-Pathologist-Session-2.jpg",
	"Comparative Literature and Culture": "https://www.brandeis.edu/comparative-literature/images/comparative-lit-landing2",
	"Computer Science": "https://o6u.edu.eg/images/pages/10112022080426%D8%B5499.jpg",
	"Creative Arts": "https://www.open.edu/openlearn/pluginfile.php/3156752/tool_ocwmanage/image/0/fca_1_OLHP_786x400.jpg",
	"Dance": "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2021/04/Dance-Cover.jpg",
	"Digital Communication": "https://www.digitalhealth.net/wp-content/uploads/2019/03/shutterstock_1193163277.jpg",
	"Digital Humanities": "https://pll.harvard.edu/sites/default/files/styles/header/public/course/HarvardX_DH_course_graphic_small%209.16.16%20AM-1.jpg?itok=LH7mS75G",
	"Disability Studies": "https://daily.jstor.org/wp-content/uploads/2019/04/disability_studies_1050x700.jpg",
	"Earth Sciences": "https://i0.wp.com/blog.frontiersin.org/wp-content/uploads/2017/12/frontiers-in-earth-science-launch-solid-earth-geophysics.jpg?fit=1000%2C600&ssl=1",
	"Economics": "https://arts-sciences.buffalo.edu/content/arts-sciences/economics/about/what-is-economics/_jcr_content/par/image.img.680.auto.jpg/1515613194181.jpg",
	"Education": "https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1356&h=668&fit=crop",
	"Electrical and Computer Engineering": "https://carleton.ca/ece/wp-content/uploads/ece-banner.jpg",
	"Engineering Science": "https://engineering.berkeley.edu/wp-content/uploads/2020/02/3.1.4_EngSci_afo_042a-scaled.jpg",
	"English": "https://d3d0lqu00lnqvz.cloudfront.net/media/media/a8a80ae8-893f-48d0-b932-02bde6f86c73.jpg",
	"Environmental Science": "https://blogs.biomedcentral.com/on-biology/wp-content/uploads/sites/5/2017/04/admin-ajax.jpg",
	"Epidemiology": "https://www.news-medical.net/image.axd?picture=2021%2F10%2Fshutterstock_1398762395.jpg",
	"Epidemiology and Biostatistics": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwxZkC-x_IonirlCY53I4akoRGqdamerXFcaiwBqymji30_3kTRqEVyL3OYuzsL3lgDec&usqp=CAU",
	"Faculty of Information and Media Studies": "https://upload.wikimedia.org/wikipedia/commons/6/62/FIMS_%26_Nursing_Building.jpg",
	"Family Studies and Human Development": "https://www.fastonlinemasters.com/wp-content/uploads/2020/03/shutterstock_1220103034.jpg",
	"Film Studies": "https://www.concordia.ca/content/shared/en/news/offices/vprgs/sgs/public-scholars/2017/07/25/film-studies-matter.img.png/1525209698899.jpg",
	"Financial Modelling": "https://www.cubesoftware.com/hubfs/Financial%20Modeling%20Software%20%281%29.png",
	"Foods and Nutrition": "https://www.heart.org/-/media/Images/Healthy-Living/Healthy-Eating/Superfoods.png",
	"French": "https://www.lingoda.com/wp-content/uploads/2021/11/french-speaking-countries-bis-1.jpg",
	"Geography": "https://0utwqfl7.cdn.imgeng.in/explore-academics/programs/images/undergraduate/henson/geographymajorMH.jpg",
	"German": "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/BMEUZFUSYNJMPKST3H4YWB677I.jpg",
	"Global Great Books": "https://www.incimages.com/uploaded_files/image/1920x1080/getty_1057183374_411554.jpg",
	"Governance, Leadership and Ethics": "https://ethicalgovernance.com.au/wp-content/uploads/2014/09/Core-values-e1446546855267.png",
	"Greek": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Parthenon_%2830276156187%29.jpg/640px-Parthenon_%2830276156187%29.jpg",
	"Green Process Engineering": "https://process-technology-online.com/wp-content/uploads/c/a/cav04200944a_37AD6EC4-0803-448C-AF28-156C65EBA7E9.jpg",
	"Health Sciences": "https://www.nicholls.edu/online/wp-content/uploads/sites/56/2019/09/health.jpg",
	"Hebrew": "https://cdn.britannica.com/63/133063-050-782411D0/Aleppo-Codex-Portion-language-ce-Hebrew-Bible.jpg",
	"Hindi": "https://gumlet.assettype.com/swarajya%2F2019-09%2Fc253d2af-84d3-41ad-b566-722b1e361b06%2Fh1.png?auto=format%2Ccompress&w=1200",
	"History": "https://i.natgeofe.com/k/1bc6572d-cb59-48b4-8d95-3e3a0f3c1b8a/history-og_16x9.jpg?w=1200",
	"History of Science": "https://www.thebritishacademy.ac.uk/media/images/March-of-Intellect-1828-William-Heath-Trustees.width-860.jpg",
	"Human Ecology":"https://www.thepublicdiscourse.com/wp-content/uploads/2016/12/pexels-photo-112641.jpeg",
	"Human Rights Studies": "https://www.ceu.edu/sites/default/files/styles/panopoly_image_full/public/academic_areas/field_ra_image/hrs.jpg?itok=2ngf706Y",
	"Humanities": "https://chronicle.brightspotcdn.com/dims4/default/9f0791d/2147483647/strip/true/crop/1334x889+333+0/resize/840x560!/quality/90/?url=http%3A%2F%2Fchronicle-brightspot.s3.amazonaws.com%2F05%2F80%2F1d13fb343c0a9bbeacc43e0a48fb%2Fstanley-fish-v2.jpg",
	"Indigenous Studies": "https://assets.change.org/photos/5/tw/ep/kNtweplFancNPjZ-800x450-noPad.jpg?1523744923",
	"Integrated Science": "https://learn.weatherstem.com/courses/wxstem_meteorology_01/module-01/01/img/photo-integration.jpg",
	"Intercultural Communications": "https://d19d5sz0wkl0lu.cloudfront.net/dims4/default/3b0c13d/2147483647/thumbnail/1000x1000%3E/quality/90/?url=https%3A%2F%2Fatd-brightspot.s3.amazonaws.com%2Fd7%2F11%2F2e9f1293af741210a27774b0c426%2Fglobal-talent-gaps-graphic.png",
	"Interdisciplinary Studies": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVhv15O8k91hxJu4y05UVncjgzgCqMPwC-Ng&usqp=CAU",
	"International Relations": "https://www.northeastern.edu/graduate/blog/wp-content/uploads/2016/07/international-relations-and-diplomacy.jpg",
	"Italian": "https://www.foodrepublic.com/wp-content/uploads/2011/12/100italianphrases-700x466.jpg",
	"Italian Studies": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD5Dp2x9kSHcm5vQgdkVWlrcpnvkea7L7npw&usqp=CAU",
	"Japanese": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQojit8TdZwpLQjiKsBZE0lpewkC3Pcx3L0fg&usqp=CAU",
	"Jewish Studies": "https://www.oberlin.edu/sites/default/files/styles/width_1600/public/js-hero.jpg?itok=y6QuV0va",
	"Kinesiology": "https://cdn-degmb.nitrocdn.com/ttfRdoaCkYdYriFDAQYzsXWjIyYFFwdP/assets/images/optimized/rev-ccea650/wp-content/uploads/2018/05/kinesiology-running.jpg",
	"Korean": "https://img2.storyblok.com/f/89778/784x584/a8e00a4b4b/kr_-_2022_m.png",
	"Latin": "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2019/08/latin-inscription-roman-fort.jpg",
	"Law": "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2022/11/Law_Degree.jpeg-2.jpg",
	"Leadership Studies": "https://149798627.v2.pressablecdn.com/wp-content/uploads/2016/07/shutterstock_365846192.jpg",
	"Linguistics": "https://louisville.edu/humanities/images/linguistics.png",
	"Management and Organizational Studies": "https://brescia.uwo.ca/undergraduate/img/mos_bnr.jpg",
	"Mathematics": "https://cdn.mos.cms.futurecdn.net/BT4GR5JKJJTudF6kUGEqg7.jpg",
	"Mechanical and Materials Engineering": "https://me.queensu.ca/images/mmeslider%20real.jpg",
	"Mechatronic Systems Engineering": "https://online.odu.edu/sites/default/files/styles/medium_4x3/public/2018-12/eet-mechantronics.jpg?h=f11d32b8&itok=nCpLjOVI",
	"Media, Information and Technoculture": "https://www.fims.uwo.ca/img/programs/ms_phd/watcherB880x300.jpg",
	"Medical Biophysics": "https://www.yorku.ca/science/physics/wp-content/uploads/sites/188/2021/05/banner_bphs01_ear_cilia_1200x400.jpg",
	"Medical Health Informatics": "https://www.northeastern.edu/graduate/blog/wp-content/uploads/2020/03/iStock-1165046681-3-1.jpg",
	"Medical Sciences": "https://www.nosm.ca/wp-content/uploads/2018/04/Petri-Dishes-1.jpg",
	"Medieval Studies": "https://medieval.berkeley.edu/sites/default/files/styles/openberkeley_brand_widgets_rectangle/public/book1.jpg?itok=lGIZDd4j",
	"Microbiology and Immunology": "https://science.ubc.ca/sites/science.ubc.ca/files/Microbiology%20and%20Immunology.jpg",
	"Museum and Curatorial Studies": "https://sota.humanities.mcmaster.ca/wp-content/uploads/sites/2/2022/08/SOTA-cccs-hero-1-768px-768x364.jpg",
	"Music": "https://daily.jstor.org/wp-content/uploads/2023/01/good_times_with_bad_music_1050x700.jpg",
	"Neuroscience": "https://images.theconversation.com/files/232280/original/file-20180816-2903-8ihfer.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip",
	"Nursing": "https://www.news-medical.net/images/Article_Images/ImageForArticle_10801_16623491270287278.jpg",
	"One Health": "https://online.hbs.edu/Style%20Library/api/resize.aspx?imgpath=/online/PublishingImages/blog/health-care-economics.jpg&w=1200&h=630",
	"Pathology": "https://www.microscope.healthcare.nikon.com/images/applications/pathology.jpg",
	"Persian": "https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image/v1638891970/EducationHub/photos/persian.jpg",
	"Pharmacology": "https://carrington.edu/wp-content/uploads/2020/01/pharmacy-pills.jpg",
	"Philosophy": "https://www.bu.edu/philo/files/2021/11/The_School_of_Athens__by_Raffaello_Sanzio_da_Urbino-1-1200x500.jpeg",
	"Physics": "https://i.pinimg.com/originals/57/c9/dd/57c9ddfc105b7da83fe94aab0c1bdf68.jpg",
	"Physiology": "https://medixonline.ca/wp-content/uploads/2020/03/anatomy.jpg",
	"Physiology and Pharmacology": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSKp79D61D9kaMFN27cjFM2Xs7SzVu4oojEw&usqp=CAU",
	"Political Science": "https://cdn.lcieducation.com/-/media/images/responsive/vancouver/schools/distancelearning/lcv_elearning_1920x1080_02_politicscience.jpg?rev=996fa787c19d4a618942e8f7ddf6c028",
	"Politics, Philosophy, and Economics": "https://www.york.ac.uk/media/study/courses/undergraduate/pep/barricades-final.jpg",
	"Portuguese": "https://thetranslationcompany.com/wp-content/uploads/2022/09/Portuguese-in-Europe.jpg",
	"Psychology": "https://admissions.uoregon.edu/sites/default/files/Psychology_0.jpg",
	"Rehabilitation Sciences": "https://d2csxpduxe849s.cloudfront.net/media/E32629C6-9347-4F84-81FEAEF7BFA342B3/4782C939-6D3D-424E-8C34EB2FD5AC5C68/F8B9676D-DCA9-489A-9D11A1D21CDA3D6B/WebsiteJpg_XL-FRESC_Main%20Visual_Red_Website.jpg",
	"Religious Studies": "https://keystoneacademic-res.cloudinary.com/image/upload/f_auto,q_auto,c_fill,w_1920/element/11/119527_shutterstock_334942220.jpg",
	"Russian": "https://shrm-res.cloudinary.com/image/upload/c_crop,h_665,w_1183,x_0,y_200/w_auto:100,w_1200,q_35,f_auto/v1/Global%20HR/mcdonalds_Russia1m_p8drwy.jpg",
	"Scholars Electives": "https://studentservices.uwo.ca/secure/cfns/se/images/750images/14.jpg",
	"Science":"https://www.sciencenews.org/wp-content/uploads/2021/01/cos_landing_chamber-bubbles-1440x468.jpg" ,
	"Social Justice and Peace Studies": "https://www.kings.uwo.ca/kings/cache/file/C462F6C2-9D44-40EF-ADDEB8BDE29B36A0_medium.jpg",
	"Social Science": "https://cdn.vox-cdn.com/thumbor/7QV1SjDDRX_LdcalSh-ikt-UP5s=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19539913/GettyImages_862457080.jpg",
	"Social Work": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-BgTrk_2c6eb9k6GnmWsSpbg4uZpCHZh5-Q&usqp=CAU",
	"Sociology": "https://www.timeshighereducation.com/student/sites/default/files/styles/default/public/Pictures/web/x/f/l//sociology.jpg?itok=AF_grVW6",
	"Software Engineering": "https://www.eng.uwo.ca/img/media/news/2014/abdelkadar-ouda-teaching-award.jpg",
	"Spanish": "https://dp4g669tqdae4.cloudfront.net/content/uploads/2019/09/12161658/Espanol.-Translation-Spanish.-Language-hand-drawn-doodles-and-lettering.-1087621188_7013x4954.jpg",
	"Speech": "https://live-production.wcms.abc-cdn.net.au/54a38f49244242ac72ab199aef7f602b?impolicy=wcms_crop_resize&cropH=539&cropW=959&xPos=0&yPos=0&width=862&height=485",
	"Statistical Sciences": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBIIRHoTDM2JLV0x6-T1wvGeM92M4_4-5tfw&usqp=CAU",
	"Studio Art":"https://d7hftxdivxxvm.cloudfront.net/?height=630&quality=80&resize_to=fill&src=https%3A%2F%2Fartsy-media-uploads.s3.amazonaws.com%2F5DTgBnqMKSBl9q25qNssjg%252F181639469_5eb73749b5_o.jpg&width=1200",
	"Thanatology": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Enrique_Simonet_-_La_autopsia_1890.jpg/1200px-Enrique_Simonet_-_La_autopsia_1890.jpg",
	"Theatre Studies": "https://www.montclair.edu/responsive-media/cache/theatre-and-dance/wp-content/uploads/sites/90/2019/10/Interior-stageleft-X3.jpg.2.2x.generic.jpg",
	"Theological Studies": "https://www.redeemer.ca/wp-content/uploads/program-religion-biblical-theological-studies-social-share.jpg",
	"Transitional Justice": "https://i1.wp.com/opiniojuris.org/wp-content/uploads/130622-hqpgpkgejz-1573302845.jpg?fit=1200%2C630",
	"Western Thought and Civilization": "https://imageio.forbes.com/specials-images/imageserve/113493718/0x0.jpg?format=jpg&width=1200",
	"Women's Studies": "https://www.uakron.edu/ws/images/womens-studies-at-ua.png",
	"World Literatures and Cultures":"https://dwllc.uiowa.edu/sites/dwllc.uiowa.edu/files/styles/ultrawide__1024_x_439/public/2021-09/antique_globe.jpg?h=71976bb4&itok=YXIunHrv" ,
	"Writing": "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d3JpdGluZ3xlbnwwfHwwfHw%3D&w=1000&q=80"
};
export default function Inner({department}){
    const [theCourses,setTheCourses] = React.useState([{course:'Loading...'}])

    
    var img = depImageMap[department];
    department = department.replace(/ /g,"%20")
    department = department.replace("/","%2F")
    console.log(key.coursesList);
    React.useEffect(function(){
        axios
          .get(key.coursesList+department)
          .then((response)=>setTheCourses(response.data))
          .then((error)=>console.log(error))
      },[theCourses,department]);
    
    return(

        <div >
        <Grid
            container
            spacing={2}
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
        >
        {theCourses.map(theCourse=>(
            <Grid item xs={12} sm={6} md={3} key={theCourses.indexOf(theCourse)}>
            <div key={theCourses.indexOf(theCourse)}>

                <Card sx={{ maxWidth: 345 }} variant="outlined" theme={'darkTheme'}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={img}
                            alt="green iguana"
                        />
                            <CardContent>
                                <Typography className="course" title={theCourse.course} sx={{ fontWeight: 'bold' }}>
                                    {theCourse.course}
                                </Typography>
                                <Typography>
                                    links: <Links messengerList={theCourse.messengerGroups}></Links>
                                </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

            </div>
            </Grid>
            ))}
            
            </Grid>
        </div>
    );
}