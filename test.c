#include <stdio.h>

int main()
{
    float km1, km2, totalkm, konsperkilo, bensin1, bensin2, totalbensin;
    printf("progam menghitung kilometer dan total bensin\n\n");
    printf("Masukan kilometer awal\n");
    scanf("%f", &km1);
    printf("Masukan kilometer akhir \n");
    scanf("%f", &km2);
    printf("masukan total bensin awal\n");
    scanf("%f", &bensin1);
    printf("masukan total bensin akhr\n");
    scanf("%f", &bensin2);
    totalkm = km2 - km1;
    if (totalkm < 0)
    {
        totalkm = 0 - totalkm;
    }

    printf("total kilometer yang di lalui =\t%.3f KM\n", totalkm);
    totalbensin = bensin1 - bensin2;
    if (totalbensin < 0)
    {
        totalbensin = 0 - totalbensin;
    }
    printf("bensin yang di gunakan yang dilalui =\t%.3f Liter\n", totalbensin);
    konsperkilo = totalbensin / totalkm;
    printf("konsumsi bensin per kilometer =\t%.3f", konsperkilo);
}