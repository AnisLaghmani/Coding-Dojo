import java.util.HashMap;
import java.util.Set;


public class TestHashmatique{
    public static void main (String[] args){
        HashMap<String, String> trackList = new HashMap<String, String>();
        trackList.put("LE DROIT DE CHANTER :" , "Les cas sociaux sont nes des silences coloniaux Polyglotte multiples origines quetes identitaires lyrics corrosifs");
        trackList.put("POLAROID EXPERIENCE :" , "On prefere rester simple on a grandi avec peu Cousine tu sais quetre humble cest deja croire Dieu");
        trackList.put("AVOIR DE LARGENT :" , "Quitter le ghetto definitivement, enterrer tous les gens qu on aime dignement Realiser ses projets les plus temeraires, prendre l avion plus souvent que le RER Majeur en l air pour mes expatrons qui m offensent  remettre la lumiere dans ma maison d enfance ca nsuffit pas a faire un homme avoir de l argent");
        trackList.put("CHANSON FRANCAISE :" , "Notre horizon est toujours vide j garde la vision  toujours vif On dit que l rap est mort, sans remord, j essaye de toujours vivre Grandir sans pere, c est dur, mais j ai vise le top J suis tellement aiguise, jte braque meme pour du toc");
        System.out.println(trackList.get("LE DROIT DE CHANTER :"));
        Set<String> keys = trackList.keySet();
        for(String key : keys) {
            System.out.println("-----------"+key);
            System.out.println(trackList.get(key));    
        }
    }
}