# 📝 Publications 

*7 peer-reviewed papers, 1 accepted paper, 1 submitted manuscript, and 3 technical reports/preprints.*

## 📚 General Speech Deepfake Detection

[GenTraceBench: A Benchmark for Tracing Audio Deepfakes Across Pre- and Post-training Stages](https://arxiv.org/abs/2609.21738) \\
**Li Wang**, Kunyu Feng, Wan Lin, Dekun Chen, Qinke Ni, Xueyao Zhang, Lei Wang, Jie Shi, Haizhou Li, Zhizheng Wu.

- IEEE ISCSLP 2026 (Accepted); [arXiv:2609.21738](https://arxiv.org/abs/2609.21738).

- GenTraceBench evaluates how pre-training and post-training change the forensic fingerprints of synthesized speech. It contains 49,728 utterances from 16 model variants and supports controlled evaluation of audio deepfake detection and attribution.

[RealComm: Benchmarking and Adapting Audio Deepfake Detection over Real Communication Channels](https://wwwwwli.github.io/RealComm/) [[Manuscript](https://wwwwwli.github.io/RealComm/downloads/RealComm.pdf)] [[Code](https://github.com/AmphionTeam/RealComm)] \\
**Li Wang***, Jindong Wang*, Wan Lin*, Kunyu Feng*, Lei Wang, Rizhao Cai, Ce Fang, Jinzhe Xue, Jie Shi, Haizhou Li, Zhizheng Wu. (* Equal contribution.)

- Submitted to IEEE/ACM Transactions on Audio, Speech, and Language Processing (TASLP).

- RealComm pairs digital speech with recordings of the same utterances transmitted through real mobile calls. It benchmarks detector robustness across acoustic and wired injection conditions and studies adaptation with simulated augmentation and real-call training.

[Teffic-Audio: Tell Fact from Fiction](https://arxiv.org/abs/2607.28351) [[Project Page](https://tefficlabs.com/)] \\
Wan Lin, **Li Wang**, Jindong Wang, Kunyu Feng, Zhizheng Wu.

- Technical Report, 2026.

- Teffic-Audio is a practical general speech deepfake detection system designed for robust performance across heterogeneous spoofing mechanisms and audio conditions. Using a straightforward Conformer-based detector and a training recipe built on multi-source open data, balanced sampling, and diverse augmentation, it achieves a pooled EER of 1.454% across 14 Speech-DF-Arena test sets, outperforming all currently public systems on the leaderboard.

[DFALLM: Achieving Generalizable Multitask Deepfake Detection by Optimizing Audio LLM Components](https://arxiv.org/abs/2512.08403) \\
Yupei Li*, **Li Wang***, Yuxiang Wang, Lei Wang, Rizhao Cai, Jie Shi, Björn W. Schuller, Zhizheng Wu. (* Equal contribution.)

- Technical Report, 2025.

- DFALLM is an Audio LLM framework for generalizable, multitask audio deepfake detection. By optimizing the combination of audio encoders and text-based LLMs, it generalizes to out-of-domain spoofing and supports binary detection, spoof attribution, and localization, achieving an average accuracy of up to 95.76% across ASVspoof 2019, In-the-Wild, and Demopage.

## 📚 Speech Language Model Safety

[VoxSafeBench: Not Just What Is Said, but Who, How, and Where](https://arxiv.org/abs/2604.14548) [[Project Page](https://amphionteam.github.io/VoxSafeBench_demopage/)] [[Code](https://github.com/AmphionTeam/VoxSafeBench)] \\
Yuxiang Wang, Hongyu Liu, Yijiang Xu, Qinke Ni, **Li Wang**, Wan Lin, Kunyu Feng, Dekun Chen, Xu Tan, Lei Wang, Jie Shi, Zhizheng Wu.

- Preprint, [arXiv:2604.14548](https://arxiv.org/abs/2604.14548), 2026.

- VoxSafeBench is a comprehensive benchmark for evaluating the social alignment of speech language models across safety, fairness, and privacy. Its two-tier design covers both content-centric and audio-conditioned risks across 22 bilingual tasks, revealing a speech grounding gap in which current models often recognize acoustic cues but fail to act on them appropriately.

## 📚 Speech Naturalness Evaluation

[SpeechJudge: Towards Human-Level Judgment for Speech Naturalness](https://arxiv.org/abs/2511.07931) \\
Xueyao Zhang, Chaoren Wang, Huan Liao, Ziniu Li, Yuancheng Wang, **Li Wang**, Dongya Jia, Yuanzhe Chen, Xiulin Li, Zhuo Chen, Zhizheng Wu.

- ICLR 2026.

## 📚 Spoken Misinformation Detection
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IEEE SLT 2024</div><img src='images/spmis.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[SpMis: An Investigation of Synthetic Spoken Misinformation Detection](https://arxiv.org/abs/2409.11308) \\
Peizhuo Liu*, **Li Wang***, Renqiang He*, Haorui He, Lei Wang, Huadi Zheng, Jie Shi, Tong Xiao, Zhizheng Wu.

- IEEE SLT 2024 (Best Paper Finalist, Top 2.5%)

- Recent advancements in speech generation, driven by generative models and large-scale training, have enabled high-quality synthetic speech but also raised concerns about its misuse for generating misinformation. While much research focuses on distinguishing machine-generated speech from human speech, the pressing challenge is detecting misinformation within spoken content, requiring analysis of factors like speaker identity, topic, and synthesis. In response, we introduce SpMis, an open-source dataset for detecting synthetic spoken misinformation. SpMis includes speech from over 1,000 speakers across five topics using state-of-the-art text-to-speech systems. Our findings highlight both promising detection capabilities and significant practical challenges, emphasizing the need for continued research in this field.
</div>
</div>

## 📚 Attack and Defense of Speaker Verification
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IEEE/ACM TASLP 2026</div><img src='images/NRS_based_PGD_2.png' alt="AdvSV 2.0 and NRS-based OTA attacks" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Over-the-Air Adversarial Attacks and Detection for Automatic Speaker Verification](https://ieeexplore.ieee.org/document/11334038) \\
**Li Wang**, Xiao Lei, Haorui He, Lei Wang, Jie Shi, Zhizheng Wu

- ASV systems are vulnerable to both over-the-line and over-the-air adversarial attacks, but detection methods lack comprehensive benchmarks. We introduce AdvSV 2.0 (628k samples, 800 hours) spanning classical attack algorithms, multiple ASV systems, and OTL/OTA conditions; a Neural Replay Simulator (NRS) strengthens OTA attacks; and we propose CODA-OCC, a one-class contrastive detector that outperforms strong baselines on AdvSV 2.0.

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IEEE ICASSP 2024</div><img src='images/advsv.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[AdvSV: An Over-the-Air Adversarial Attack Dataset for Speaker Verification](https://arxiv.org/abs/2310.05369) \\
**Li Wang**, Jiaqi Li, Yuhao Luo, Jiahao Zheng, Lei Wang, Hao Li, Ke Xu, Chengfang Fang, Jie Shi, Zhizheng Wu

- Deep neural networks, including Automatic Speaker Verification (ASV) systems, are vulnerable to adversarial attacks. This study introduces an open-source adversarial attack dataset, AdvSV, for ASV research, focusing initially on over-the-air attacks, which involve perturbation generation, loudspeakers, microphones, and varying acoustic environments. Based on the Voxceleb1 Verification test set, AdvSV simulates over-the-air attacks using representative ASV models, aiming to standardize and facilitate reproducible research in this field.

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IEEE ICASSP 2024</div><img src='images/neural_replay_simulator.png' alt="sym" width="100%"></div></div> 
<div class='paper-box-text' markdown="1">

[An Initial Investigation of Neural Replay Simulator for Over-the-Air Adversarial Perturbations to Automatic Speaker Verification](https://arxiv.org/abs/2310.05354) \\
Jiaqi Li, **Li Wang**, Liumeng Xue, Lei Wang, Zhizheng Wu

- Deep Learning has advanced Automatic Speaker Verification (ASV), but physical access adversarial attacks, particularly over-the-air involving loudspeakers, microphones, and replaying environments, are less studied. This research explores using a neural replay simulator to enhance over-the-air attack robustness in ASV. By simulating the replay process with a neural waveform synthesizer, the study on the ASVspoof2019 dataset shows increased success rates of these attacks, highlighting security concerns for ASV in physical access scenarios.

</div>
</div>

## 📚 Speaker Verification and Keyword Spotting Multi-task
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IEEE ICASSP 2022</div><img src='images/decoupling.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Learning Decoupling Features Through Orthogonality Regularization](https://ieeexplore.ieee.org/document/9747878) \\
**Li Wang**, Rongzhi Gu, Weiji Zhuang, Peng Gao, Yujun Wang, Yuexian Zou

- This paper is committed to improving the model performance of personalized keyword spotting (identifying keywords and speakers) tasks. This paper believes that the key of personalized keyword spotting task is how to effectively extract the features shared by two tasks and decouple the features related to tasks. This paper creatively uses orthogonal regularization to constrain the model to decouple keyword information and speaker information.
  
</div>
</div>

## 🎙 Spoken Keyword Spotting


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">INTERSPEECH 2021</div><img src='images/TextAnchor.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Text Anchor Based Metric Learning for Small-Footprint Keyword Spotting](https://www.isca-speech.org/archive/interspeech_2021/wang21da_interspeech.html) \\
**Li Wang**, Rongzhi Gu, Nuo Chen, Yuexian Zou

- Innovatively propose a measurement learning method based on text anchor, and use BERT to generate embedding with rich semantic information, so that the model can understand the semantic information of keywords.
  
</div>
</div>
