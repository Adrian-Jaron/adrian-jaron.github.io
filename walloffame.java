
public class WallOfFame
{
    private Score[] scores;
    int huidigeIndex;
    public WallOfFame()
    {
        scores = new Score[10];
        
    }
    
public void voegScoreToe(String naam, int score) {
    Score nieuwScore = new Score(naam, score);
    boolean gevonden = false;
    int i = scores.length - 1;
    while(scores[i].getScore() > nieuwScore.getScore()){
        if(nieuwScore.getScore() > scores[i].getScore())
            scores[i] = nieuwScore;
            for(int i=scores.length; i > 0; i--){
                if(scores[i].getScore() < nieuwScore)
                 scores[i] = scores[i-1];
            }
            scores[i] = nieuwScore;
        }
        
        i--;
        
    }
    }
    