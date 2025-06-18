import doctorImg1 from '../../assets/1.png';
import doctorImg2 from '../../assets/2.png';
import doctorImg3 from '../../assets/3.png';
import doctorImg4 from '../../assets/4.png';
import doctorImg5 from '../../assets/5.png';
import doctorImg6 from '../../assets/6.png';
import doctorImg7 from '../../assets/7.png';
import doctorImg8 from '../../assets/8.png';
import doctorImg9 from '../../assets/9.png';

const imgs = [doctorImg1, doctorImg2, doctorImg3, doctorImg4, doctorImg5, doctorImg6, doctorImg7, doctorImg8, doctorImg9];



export interface CardData {
  id: number;
  name: string;
  specialty: string;
  image?: string;
}
