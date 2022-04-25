#rand function
:local rand do={ 
    :local aa "561086834629131632249427470050109227813597422785032174013148";
    :local ab "859093263051872088671379152728203334770278385885864902137502";
    :local ac "220675571653132665051353527722954111999056481648445592064739";
    :local ad "218926245340475361168913665885928921865501648377403595883564";
    :local ae "404269961575666002790934830647097635741891667289481694187163";
    :local af "412514418531266976230323850978941394935710858658393525030140";
    :local a [:pic $aa $s ($s + 1)];
    :local b [:pic $ab $s ($s +1 )]; 
    :local c [:pic $ac $s ($s + 1)];
    :local d [:pic $ad $s ($s + 1)];
    :local e [:pic $ae $s ($s + 1)];
    :local f [:pic $af $s ($s + 1)];
    :return "$a$b$c$d$e$f";
}

# total gen
:local totGen 5;
# user profile
:local profile "Free";

# voucher code
:local comment "vc-$profile";
# count user
:local countVoucher [/ip hotspot user print count-only where comment="$comment" ];
:local tot (:tonum $countVoucher);
#gen user
:if ($tot<2) do={
    :for i from=1 to=$totGen do={
        :delay 1;
        :local getTime [/sys clock get time];
        :local ss (:tonum [:pic $getTime 6 8]);
        :local id [$rand s=$ss];
        /ip hotspot user add name=$id password=$id profile="$profile" comment="$comment";
    }
}
